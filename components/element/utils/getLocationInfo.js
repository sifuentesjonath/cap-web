const getLocationInfo = (response) => {
  // const address = response.results[0].formatted_address;
  let address, city, state, country, zip, street;
  // const res = [...response.results[0].address_components[0]]
  // res.forEach(_res => {
  //   res.types.forEach(_type => {
  //     if (_type === 'route') {
  //       address = res.long_name;
  //     } else if (_type === 'locality') {
  //       city = res.long_name;
  //     } else if (_type === 'administrative_area_level_1') {
  //       state = res.long_name;
  //     } else if (_type === 'country') {
  //       country = res.long_name;
  //     } else if (_type === 'postal_code') {
  //       zip = res.long_name;
  //     } else if (_type === 'street_number') {
  //       street = res.long_name;
  //     }
  //   })
  // })
  // console.log({response})
  for (let i = 0; i < response.results[0].address_components.length; i++) {
    for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
      switch (response.results[0].address_components[i].types[j]) {
        case "route":
          address = response.results[0].address_components[i].long_name;
          break;
        case "locality":
          city = response.results[0].address_components[i].long_name;
          break;
        case "administrative_area_level_1":
          state = response.results[0].address_components[i].long_name;
          break;
        case "country":
          country = response.results[0].address_components[i].long_name;
          break;
        case "postal_code":
          zip = response.results[0].address_components[i].long_name;
          break;
        case "street_number":
          street = response.results[0].address_components[i].long_name;
          break;
      }
    }
  }
  return {
    address, city, state, country, zip, street
  }
}

export default getLocationInfo;