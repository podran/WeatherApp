const oneDayForecast = JSON.parse(`{
    "Headline": {
      "EffectiveDate": "2019-08-10T08:00:00-07:00",
      "EffectiveEpochDate": 1565449200,
      "Severity": 7,
      "Text": "Sunny this weekend",
      "Category": "",
      "EndDate": null,
      "EndEpochDate": null,
      "MobileLink": "http://m.accuweather.com/en/us/las-vegas-nv/89101/extended-weather-forecast/329506?lang=en-us",
      "Link": "http://www.accuweather.com/en/us/las-vegas-nv/89101/daily-weather-forecast/329506?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2019-08-08T07:00:00-07:00",
        "EpochDate": 1565272800,
        "Temperature": {
          "Minimum": {
            "Value": 79,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 101,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 14,
          "IconPhrase": "Partly sunny w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/us/las-vegas-nv/89101/daily-weather-forecast/329506?lang=en-us",
        "Link": "http://www.accuweather.com/en/us/las-vegas-nv/89101/daily-weather-forecast/329506?lang=en-us"
      }
    ]
  }`);


const searchReducer = (state = {
    oneDayForecast: oneDayForecast,
    fiveDayForecast: [],
    city: {}
}, action) => {
    switch(action.type){
        case 'search':
            return {
                oneDayForecast: action.oneDayForecast,
                fiveDayForecast: action.oneDayForecast,
                city: action.city
            }
        default: return state;
    }
}

export default searchReducer;