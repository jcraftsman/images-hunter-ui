import * as ActionTypes from './ActionTypes';

export const searchImages = (keyword) => ({
    type: ActionTypes.SEARCH,
    payload: {keyword}
});

export const receiveImages =
    (images) => ({
        type: ActionTypes.SEARCH_DONE,
        payload: {
            images
        }
    });