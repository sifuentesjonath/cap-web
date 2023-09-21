import React, { useMemo, useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
// Hooks
import useCondooTableFinancials from '@/hooks/useCondooTableFinancials';
import useCondooTableFinancialsExport from '@/hooks/useCondooTableFinancialsExport';
import { ExportToCsv, Options as CSVExportOptions } from 'export-to-csv';
// Financial api
import { getFinancialGLTransactions } from '@/service/api';
import DummyData from './dummyData.json'
// helpers
import buildFinancialsTable from '@utils/financialsTable';
import formatPayments from '@utils/financialsTable/toTable/formatPayments';
import getGeneralLedgerTransactionsToChart from '@utils/chart/toChart/generalLedgerTransactionsToChart';
import createEmptyTable from '@utils/financialsTable/createEmptyTable'
import {
  getCategorizedPayments,
  PropertyType,
  formatTransactions,
  getPropertyDateRange,
  filterPropertyByDate,
} from './financials'
import { createFileName } from './utils/handleCSVExport';
import { fetchPropertiesAndFormatAsItems, formatPropertiesAsItems } from './utils/handlePropertyFormat';
// Components
import AppLayout from '@components/layout/AppLayout';
import ApexChart from '@components/block/CondooCharts/ApexChart';
import Button from '@components/block/Button';
import CondooTableFinancials from '@components/block/CondooTableFinancials';
import DateFilterFromTo from '@components/block/DateFilterFromTo/DateFilter';
import openAdviseToast from '@components/element/StyledToastAdvise';
import ItemsWithScroll from './ItemsWithScroll';
import StyledLoader from '@components/element/StyledLoader';
// Icons
import { ChevronLeftIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/outline';
// types
import { IToggleGroupActiveOption } from '@components/block/ToggleGroupActiveChange';
import { ChartPaymentsType } from '@components/block/CondooCharts/chart';
import { AllPaymentsType } from '@utils/financialsTable/types';
// Styles
import {
  FinancialsContainer,
  Container,
  TitleHolderSelectionsPosition,
  HorizontalScroller,
  GraphContainer,
  TableFinancialsContainer,
  TitleAndItemSwitcherContainer,
  Separator,
} from './style';

export interface IFinancialsProps { }
export type FinancialsWithLayout = React.FC<IFinancialsProps> & {
  layout: typeof AppLayout;
};

const Financials = () => {
  const [allProperties, setAllProperties] = useState<PropertyType[]>([]);
  const [titleHolderProperty, setTitleHolderProperty] = useState<PropertyType>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false)
  const [cannotDownload, setCannotDownload] = useState<boolean>(false);
  const [selectedPropertyName, setSelectedPropertyName] = useState<string>('');
  const [isEmptyPayments, setIsEmptyPayments] = useState<boolean>(false); ''
  // All payments of current titleholder
  const [allPayments, setAllPayments] = useState(null)
  // Date filter usage
  const [oldestDate, setOldestDate] = useState<number>(null);
  const [latestDate, setLatestDate] = useState<number>(null);
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  // View selectors
  const [currentPropertyView, setCurrentPropertyView] = useState<string>(null);
  const [currentDateFilter, setCurrentDateFilter] = useState<string>("m6");
  // Title holder items that are charged on item selector
  const [propertiesOptionItems, setPropertiesOptionsItems] = useState<IToggleGroupActiveOption[]>([]);
  // Chart and Table usage
  const [chartData, setChartData] = useState<ChartPaymentsType[]>([]);
  const [dataToTable, setDataToTable] = useState<AllPaymentsType>(null);
  // User and renders
  const LoggedUser = useSelector((state: any) => state.auth);
  const initialRender3 = useRef(true);
  const initialRender5 = useRef(true);
  const initialRender6 = useRef(true);
  // Memo lists
  const propertiesAsOptionItems: IToggleGroupActiveOption[] = useMemo(
    () => propertiesOptionItems
    , [propertiesOptionItems]
  )
  const dateOptions: IToggleGroupActiveOption[] = useMemo(
    () => [
      { title: 'Monthly', value: 'm6' },
      { title: 'Yearly', value: 'y1-asc' },
    ],
    []
  );

  const { tableHeader, tableBody } = buildFinancialsTable(dataToTable, currentDateFilter, [fromDate, toDate])

  // Change selections
  const onPropertySelect = (propertyId: string) => {
    // set selected property name
    const propertyName = propertiesAsOptionItems.find((option) => option.value == propertyId).title;
    setSelectedPropertyName(propertyName);
    // set property views if financial data is not empty
    if (!allProperties.length) return;
    const property = allProperties.find(property => property.id.toString() == propertyId);
    setCurrentPropertyView(propertyId);
    setTitleHolderProperty(property);
  }

  const onDateFilterSelect = (date: string) => {
    if (date.length == 0 || date == currentDateFilter) return currentDateFilter;

    setCurrentDateFilter(date);
    return date;
  }
  // Change selections - Chevrons
  const onPrevDateViewSelection = () => {
    const dateIndexFound = dateOptions.findIndex((dateOption) => {
      return dateOption.title == currentDateFilter;
    })

    const newSelection = dateOptions[dateIndexFound - 1];
    if (newSelection == null || newSelection == undefined) return;
    onDateFilterSelect(newSelection.value);
  }

  const onNextDateViewSelection = () => {
    const dateIndexFound = dateOptions.findIndex((dateOption) => {
      return dateOption.value == currentDateFilter;
    })

    if (dateIndexFound == -1) return;

    const newSelection = dateOptions[dateIndexFound + 1];
    if (newSelection == null || newSelection == undefined) return;
    onDateFilterSelect(newSelection.value);
  }

  const loadChartData = (_allPayments) => {
    if (!_allPayments) return;
    if (!_allPayments.incomes) return;

    const { Parking, Rental, Other, } = _allPayments.incomes
    const _payments = [...Parking, ...Rental, ...Other];
    const spreadPaymentsAsChartItems = getGeneralLedgerTransactionsToChart(_payments);
    setChartData([...spreadPaymentsAsChartItems]);
  }

  const loadDataToTable = (categorizedPayments) => {
    if (!titleHolderProperty) return;
    if (titleHolderProperty.payments.length === 0) return;

    const _categorizedPayments = { ...categorizedPayments };
    //@ts-ignore
    const _allPayments: AllPaymentsType = formatPayments(_categorizedPayments);

    setDataToTable(_allPayments);
  }

  const exportAsCSV = () => {
    try {
      setIsDownloading(true);
      const viewName = dateOptions.find((option) => option.value == currentDateFilter).title;
      const fileName = createFileName(selectedPropertyName, viewName);
      if (isEmptyPayments) openAdviseToast('advise', `The downloaded file will be empty as there are no payments made yet.`);

      const { options, csv } = useCondooTableFinancialsExport(fileName, tableHeader, tableBody);
      const csvExporter = new ExportToCsv(options);

      csvExporter.generateCsv(csv);
      openAdviseToast('success', `Downloaded ${fileName}`);
    } catch (err) { } finally {
      setIsDownloading(false);
    }
  }

  useEffect(() => { // Get Transactions
    const BringTransactions = async () => {
      setIsloading(true);

      // uncomment this lines and delete dummy data when we have finished
      const financialTransactions = await getFinancialGLTransactions(LoggedUser.Email);
      const transactions = financialTransactions.data ? { ...financialTransactions.data } : {};
      // const transactions = DummyData;

      const _allProperties = formatTransactions(transactions);
      const isAllPropertiesEmpty = _allProperties.length === 0;
      if (isAllPropertiesEmpty) {
        const emptyTable = createEmptyTable();
        const fetchedPropertyNames = await fetchPropertiesAndFormatAsItems(LoggedUser.Email);
        // setCannotDownload(true);
        setPropertiesOptionsItems(fetchedPropertyNames);
        setSelectedPropertyName(fetchedPropertyNames[0].title);
        setIsEmptyPayments(true);
        setDataToTable(emptyTable);
        setIsloading(false);
        return
      };

      // console.log('all properties obtained in transactions: ', _allProperties)
      setAllProperties(_allProperties);
      const currentProperty = _allProperties[0];
      const _titleHolderProperty = currentProperty;
      setTitleHolderProperty(_titleHolderProperty);

      const [oldestPropertyDate, latestPropertyDate] = getPropertyDateRange(_allProperties);

      setOldestDate(oldestPropertyDate.getFullYear());
      setLatestDate(latestPropertyDate.getFullYear());
      // FIXME: setting these states triggers date filtering of dates useEffect,
      //  which makes it not efficient as it filters once in a redundant way
      //  before user uses date filter the first time 
      setFromDate(oldestPropertyDate);
      setToDate(latestPropertyDate);

      //@ts-ignore
      const propertyMemoItems = formatPropertiesAsItems(_allProperties);
      setPropertiesOptionsItems(propertyMemoItems);
      setSelectedPropertyName(propertyMemoItems[0].title);
      setCurrentPropertyView(propertyMemoItems[0].value);
      setIsloading(false);
    }

    BringTransactions().catch(err => {
      //console.error(err)
      setIsloading(false);
      return;
    });
  }, []);

  useEffect(() => { // filter titleholder payments every time date range states changes 
    if (initialRender6.current) {
      initialRender6.current = false;
      return;
    }
    const canFilter = (_fromDate: number, _toDate: number): boolean => {
      if (allProperties.length == 0) return false;
      if (!titleHolderProperty) return false;
      if (!allPayments) return false;
      if (!_fromDate || !_toDate) return false;
      // Avoid date states to be in an ilogical range
      if (_fromDate > _toDate) return false;
      if (_toDate < _fromDate) return false;
      return true;
    }

    if (!canFilter(fromDate.valueOf(), toDate.valueOf())) return;

    setIsloading(true);

    const foundPropertyIndex = allProperties.findIndex(({ id }) => titleHolderProperty.id === id);
    const propertiesFilteredByDate = filterPropertyByDate(allProperties[foundPropertyIndex], [fromDate, toDate]);

    setTitleHolderProperty(propertiesFilteredByDate);
    setIsloading(false);
  }, [fromDate, toDate])

  useEffect(() => { // Set dependent states each titleholder update
    if (initialRender3.current) {
      initialRender3.current = false;
      return;
    }
    if (!titleHolderProperty) return;

    setIsloading(true);
    const _allPayments = getCategorizedPayments(titleHolderProperty.payments);
    setAllPayments(_allPayments);
    loadChartData(_allPayments);
    loadDataToTable(_allPayments);

    setIsloading(false);
  }, [titleHolderProperty]);

  useEffect(() => { // Set states when date filtering changes
    if (initialRender5.current) {
      initialRender5.current = false;
      return;
    }
    setIsloading(true);
    loadChartData(allPayments);
    loadDataToTable(allPayments);
    setIsloading(false);
  }, [currentDateFilter]);

  return (
    <FinancialsContainer>
      {isLoading && <StyledLoader />}
      <div className='date-filter-container'>
        <div className='date-filter'>
          <DateFilterFromTo
            oldestDateLimit={oldestDate}
            newestDateLimit={latestDate}
            fromDateState={[fromDate, setFromDate]}
            toDateState={[toDate, setToDate]}
          />
          <Button onClick={exportAsCSV} width={152} bgColor='black' isLoading={isDownloading} disabled={cannotDownload}>Download</Button>
        </div>
      </div>

      <Container>
        <TitleHolderSelectionsPosition>
          <HorizontalScroller>
            <ItemsWithScroll
              itemOptions={propertiesAsOptionItems}
              onValueChange={(property) => onPropertySelect(property)}
              defaultActive={propertiesAsOptionItems[0]?.value ? propertiesAsOptionItems[0]?.value : ''}
            />
          </HorizontalScroller>
        </TitleHolderSelectionsPosition>

        <GraphContainer>
          {currentDateFilter && <ApexChart viewAs={currentDateFilter} payments={chartData} />}
        </GraphContainer>

        <TableFinancialsContainer>
          <TitleAndItemSwitcherContainer>
            <div className='table-heading-container'>
              <h2 className='title'>
                {titleHolderProperty ? titleHolderProperty.name : ''}
              </h2>

              <div className='groupedItemsScroll'>
                {currentDateFilter &&
                  <ItemsWithScroll
                    itemOptions={dateOptions}
                    onValueChange={(date) => onDateFilterSelect(date)}
                    defaultActive={currentDateFilter}
                  />
                }
              </div>
            </div>

            <div>
              <Separator />
            </div>
          </TitleAndItemSwitcherContainer>

          {/* This conditional must stay because dataToTable is undefined the first time this component renders */}
          {dataToTable && <CondooTableFinancials tableHeader={tableHeader} tableBody={tableBody} />}
        </TableFinancialsContainer>
      </Container>
    </FinancialsContainer>
  )
}

export default Financials