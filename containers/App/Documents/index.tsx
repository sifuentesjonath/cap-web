import { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useQueryClient } from 'react-query';
// Components
import AppLayout from '@components/layout/AppLayout';
import DocumentsItems from './DocumentsItems';
import ButtonFilters from './ButtonFilters';
import PerfectScrollbar from 'react-perfect-scrollbar'
import StyledLoader from '@components/element/StyledLoader';
import SelectOnly, { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
// Helpers
import useFilterDocuments, { IFilterDocuments } from './useFilterDocuments'
import useDocumentsData, { checkIfDocumentsNeedUpload, QUERY_KEY_NAME as documentsQueryKey } from '@/service/useApi/Documents/useDocumentsData';
import { usePropertiesData } from '@/service/useApi/Property';
import { loadCondooDocuments, } from './utils/documentHandling';
import { FiltersType } from './utils/documentFilteringHandling'
import { handleButtonFilter } from './utils/buttonFilteringHandling';
// style
import {
  DocumentsContainer,
  Container,
  ButtonsAndScrollableContainer,
  PropertyFilterContainer,
} from './style'
// Type
import { CondooDocumentsType, PropertyType } from '@/service/apiTypes';

export interface IDocumentsProps { }
export type DocumentsWithLayout = FC<IDocumentsProps> & {
  layout: typeof AppLayout;
};
const Documents: DocumentsWithLayout = props => {
  const queryClient = useQueryClient();
  const [condooDocuments, setCondooDocuments] = useState<CondooDocumentsType[]>([]);
  const [propertiesOptions, setPropertiesOptions] = useState<IOptionsProps[]>([]);
  const [useFilterArgs, setUseFilterArgs] = useState<IFilterDocuments>({ documents: [], buttonFilter: [], property: '' });

  // const [fromDate, setFromDate] = useState<Date>(new Date());
  // const [toDate, setToDate] = useState<Date>(new Date());
  const logged = useSelector((state: any) => state.auth.Email);

  // == Documents == 

  const loadDocuments = (documents: CondooDocumentsType[]) => {
    const loadedDocuments = loadCondooDocuments(documents);
    setUseFilterArgs(loadedDocuments);
    setCondooDocuments(documents);
  }

  const loadPropertiesOptions = (properties: PropertyType[]) => {
    const optionProperties: any = properties.map(({ Name, Id }) => ({ label: Name, value: Id }))
    const defaultOption = { label: 'All Properties', value: -1 };
    setPropertiesOptions([defaultOption, ...optionProperties]);
  }

  // == Fetching data

  const { isFetching: isFetchingDocuments } = useDocumentsData(logged, {
    onSuccess: (documents) => loadDocuments(documents),
    // Avoid annoying loading animation on every focus
    //  as it only fetch during page load and refreshing documents 
    refetchOnWindowFocus: false,
  });

  const { isFetching: isFetchingProperties } = usePropertiesData(logged, {
    onSuccess: (properties) => loadPropertiesOptions(properties),
    // Avoid annoying loading animation on every focus
    //  as it only fetch during page load and refreshing documents 
    refetchOnWindowFocus: false,
  });

  useEffect(() => { // -- Verify documents status --
    const checkDocumentsOnDocuSign = async () => {
      try {
        const newDocuments: CondooDocumentsType[] = await checkIfDocumentsNeedUpload(logged);
        // Refetch the documents with custom query hook so it triggers loading animation
        if (newDocuments) queryClient.invalidateQueries(documentsQueryKey);
      } catch (err) { }
    }
    checkDocumentsOnDocuSign();
  }, []);

  useEffect(() => { // -- Trigger filter -- 
    if (condooDocuments.length == 0) return;

    const documentsFiltered = useFilterDocuments({
      ...useFilterArgs,
      documents: condooDocuments,
    });

    setUseFilterArgs({
      ...useFilterArgs,
      documents: documentsFiltered,
    })
  }, [useFilterArgs.buttonFilter, useFilterArgs.property])

  // == Page Actions ==
  const isLoading = [isFetchingDocuments, isFetchingProperties].includes(true);

  // -- Button filter
  const toggleFilterButton = (buttonTitle: FiltersType) => {
    const { buttonFilter, isFilterEmpty } = handleButtonFilter(buttonTitle, useFilterArgs.buttonFilter);
    setUseFilterArgs({ ...useFilterArgs, buttonFilter });
  }
  // -- Property filter 
  const onPropertySelect = ({ value }: IOptionsProps) => {
    const isPropertySelected = parseInt(value) != -1;
    let property = '';
    // Set selected property option to filter
    const findPropertyById = (id: string) => propertiesOptions.find((property) => property.value == id);
    if (isPropertySelected) property = findPropertyById(value).label;
    setUseFilterArgs({ ...useFilterArgs, property });
  }

  return (
    <DocumentsContainer>
      {isLoading && <StyledLoader />}
      <div className='property-filter-container'>
        <div className='property-filter'>
          <PropertyFilterContainer>
            <h4>Property Filter</h4>
            <SelectOnly
              className='select-property-input'
              placeholder='Property'
              onChange={onPropertySelect}
              options={propertiesOptions}
              styles={{ width: 261, height: 50 }}
            />
          </PropertyFilterContainer>
        </div>
      </div>

      <Container>
        <ButtonsAndScrollableContainer>
          <ButtonFilters handleButtonFilterClick={toggleFilterButton} />

          <div className='documents-container'>
            <PerfectScrollbar>
              <DocumentsItems documents={useFilterArgs?.documents} />
            </PerfectScrollbar>
          </div>
        </ButtonsAndScrollableContainer>
      </Container>
    </DocumentsContainer>
  );
};

Documents.layout = AppLayout;

export default Documents;
