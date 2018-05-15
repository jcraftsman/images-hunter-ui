import {applyMiddleware, createStore} from 'redux';
import {createCycleMiddleware} from 'redux-cycles';
import {run} from '@cycle/run';
import {makeHTTPDriver} from '@cycle/http';
import reducers from './reducers';
import main from './cycles'


const configureStore = () => {

    const cycleMiddleware = createCycleMiddleware();
    const { makeActionDriver , makeStateDriver } = cycleMiddleware;

    const store = createStore(
        reducers,
        applyMiddleware(cycleMiddleware)
    );

    run(main, {
        ACTION: makeActionDriver(),
        STATE: makeStateDriver(),
        HTTP: makeHTTPDriver(),
    });
    return store;
};

export default configureStore;

