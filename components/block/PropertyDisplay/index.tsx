import React, { FC, useState, useEffect } from 'react'
import { IProperty } from '@/containers/App/Properties/utils/types'
import PropertyCard from '@/components/block/PropertyCard'
// Helpers
import { getThumbNail, formatPropertiesByCity } from './properties'

import {
  Container,
  LocationTitle,
  PropertiesCardContainer,
  PropertiesGroup,
  Separator
} from './style'

interface IPropertiesByCity {
  [key: number]: IProperty[];
}

interface IPropertyDisplayProps {
  properties: IProperty[],
}
const PropertyDisplay: FC<IPropertyDisplayProps> = ({
  properties = []
}) => {
  const [propertiesByCity, setPropertiesByCity] = useState<IPropertiesByCity>({})
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    if (properties.length == 0) return;

    const propertiesByCity = formatPropertiesByCity(properties);
    const cities = Object.keys(propertiesByCity);
    setPropertiesByCity(Object.values(propertiesByCity));
    setCities(cities);
  }, [properties]);

  return (
    <Container >

      {cities.length != 0 && propertiesByCity &&
        cities?.map((city, index) => {
          const cityProperties = propertiesByCity[index];
          const thumbNail = getThumbNail(index)

          return (
            <PropertiesGroup key={`property_group_${index}`}>
              <LocationTitle>{city}</LocationTitle> {/* <LocationTitle>Toronto, On, Canada</LocationTitle> */}
              <PropertiesCardContainer>
                <div className='card-container'>
                  {
                    cityProperties?.map((property, propertyIndex) => {
                      return (
                        <PropertyCard
                          key={`property_group_${index}_property_card_${propertyIndex}`}
                          property={property}
                          thumbNail={thumbNail}
                        />
                      )
                    })
                  }
                </div>
              </PropertiesCardContainer>
              <Separator></Separator>
            </PropertiesGroup>
          )
        })
      }
    </Container>
  )
}


export default PropertyDisplay
