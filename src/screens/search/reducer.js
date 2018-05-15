export const findImages = keyword => ({type: 'SEARCH', payload: keyword});


const getImages = (state = {images: []}, action) => {

    const {type, payload} = action;

    switch (type) {
        case 'SEARCH':
            console.log('Im searching');
            return {
                ...state,
                keyword: payload
            };
        case 'SEARCHING':
            return {
                ...state,
            };
        case 'SEARCH_DONE':
            console.log('Ive finished');
            return {
                ...state,
                images: payload,
            };
        case 'SEARCH_FAILED':
            return {
                ...state,
                images: [],
                error: true,
            };
        default:
            return state;
    }
};
export default getImages;