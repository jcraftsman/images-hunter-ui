import {combineCycles} from 'redux-cycles';

import * as ActionTypes from './ActionTypes';
import * as actions from './actions';

const fetchImagesByKeyword = (sources) => {
    const keyword$ = sources.ACTION
        .filter(action => action.type === ActionTypes.SEARCH)
        .map(action => action.payload.keyword);

    const request$ = keyword$
        .map(keyword => ({
            url: `/hunt/${keyword}`,
            category: 'images'
        }));

    const response$ = sources.HTTP
        .select()
        .flatten()
        .map(res => res.body)
        .map(actions.receiveImages);

    return {
        ACTION: response$,
        HTTP: request$
    }
};

export default combineCycles(fetchImagesByKeyword);
