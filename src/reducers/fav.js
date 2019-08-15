const favReducer = (state = [] , action) => {
    switch(action.type){
        case 'Add':

            if(state.includes(action.city)) return state;
            return [
                ...state,
                 action.city
                ]
        case 'Remove':
                console.log(state);
                console.log(action);
            return [...state.filter( item=> item !== action.city )]
        default: return state
    }
}




export default favReducer;

