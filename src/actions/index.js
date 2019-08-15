

export const addFav = (city) => {
    return {
        type: 'Add',
        city
    }
}

export const removeFav = (city) => {
    return {
        type: 'Remove',
        city
    }
}

export const changePath = (path) => {
    return {
        type: 'ChangePath',
        path
    }
}

export const oneDayForecast = (response) => {
    return {
        type: 'oneDay',
        oneDayForecast: response
    }
}

export const fiveDayForecast = (response) => {
    return {
        type: 'fiveDay',
        fiveDayForecast: response
    }
}


export const selectedResult = (selectedResult) => {
    return {
        type: 'selected',
        selectedResult
    }
}

export const async = (wait) => {
    return {
        type: 'async',
        wait
    }
}

export const favWeather = (weather) => {
    return {
        type: 'addFavWeather',
        weather
    }
}

export const getCurrentWeather = (favorites) => {
    return {
        type :'putWeather',
        favorites
    }
}


// export const getCurrentWeather = () => (dispatch, getState) => {
//     try{
//         var map = [];
//         getState().favorites.map( async fav => {
//             await getForecast(fav.city.Key)
//             .then(forcast => {
//                 map.push(forcast);
//             });
//         });
//         console.log(map);
//         dispatch({
//             type: 'putWeather',
//             currentFavWeather: map
//         })
//     }catch(e){

//     }
// }