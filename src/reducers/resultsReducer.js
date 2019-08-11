const resultsReducer = (state = {
    results: [],
    selectedResult: null
}, action) => {
    switch(action.type){
        case 'menu':
            return {
                results: action.results
            }
        case 'selected':
            return {
                selectedResult: action.selectedResult
            }
        default: return state;
    }
}

export default resultsReducer;