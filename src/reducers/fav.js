const favReducer = (state = [], action) => {
    switch(action.type){
        case 'Add':
            if(state.containts(action.city)) return [...state];
            return [
                ...state,
                action.city
            ]
        case 'Remove':
            return [
                ...state.filter(city => city !== action.city),
            ];
        default: return [
            ...state
        ];
    }
}

export default favReducer;