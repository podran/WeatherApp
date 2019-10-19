const searchReducer = (state = {
    oneDayForecast: [],
    fiveDayForecast: {}
}, action) => {
    switch(action.type){
        case 'oneDay':
            return {
                oneDayForecast: action.oneDayForecast,
                fiveDayForecast: state.fiveDayForecast
            }
        case 'fiveDay':
          return {
              oneDayForecast: state.oneDayForecast,
              fiveDayForecast: action.fiveDayForecast
          }
        default: return state;
    }
}

export default searchReducer;