const axios = require('axios');
const API='be9SnLSTir8OGl4fmPVSfli1KakCeeUq';

export const getForecast = (key) => {
    return axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/currentconditions/v1/${key}`,
        params: {
            apikey : API
        }
      });
}

export const getFiveDayForecast = (key) => {
    return axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}`,
        params: {
            apikey : API
        }
      });
}

const filterResults = (results) => {
    let newResults;
     if (results) {
         newResults = results.map(result => {
             return {
                 ...result,
                 label: `${result.Country.ID} - ${result.LocalizedName} - ${result.AdministrativeArea.LocalizedName}`,
                 value: `${result.Country.ID} - ${result.LocalizedName} - ${result.AdministrativeArea.LocalizedName}`
             }
         });
         return newResults;
     }
}

export const promiseOptions = (inputValue, cb) => {
    axios({
        method: 'get',
        url: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete',
        params: {
            apikey : API,
            q: inputValue.replace(/[^A-Za-z]/ig, '')
        }
      })
      .then((results) => {
        cb(filterResults(results.data));
      })
      .catch(err => console.log(err));
}


export const locationQuery = (key) => {
    return axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/locations/v1/${key}`,
        params: {
            apikey : API
        }
      });
}