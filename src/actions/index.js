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