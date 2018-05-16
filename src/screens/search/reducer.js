export const findImages = keyword => ({type: 'SEARCH', payload: keyword});


const getImages = (state = {images: []}, action) => {

    const {type, payload} = action;

    switch (type) {
        case 'SEARCH':
            return {
                ...state,
                keyword: payload
            };
        case 'SEARCHING':
            return {
                ...state,
            };
        case 'SEARCH_DONE':
            return {
                ...state,
                images: payload.images,
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