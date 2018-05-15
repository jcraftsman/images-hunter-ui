import * as ActionTypes from './ActionTypes';

export const searchImages = (keyword) => ({
    type: ActionTypes.SEARCH,
    payload: {keyword}
});

export const receiveImages =
    (images) => {
    console.log(images);
    return{
        type: ActionTypes.SEARCH_DONE,
        payload: {
            images
        }
    };
};