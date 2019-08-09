const searchReducer = (state = "Tel Aviv", action) => {
    switch(action.type){
        case 'search':
            return action.city
        default: return state;
    }
}

export default searchReducer;