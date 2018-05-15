import {applyMiddleware, compose, createStore} from 'redux';
import {createCycleMiddleware} from 'redux-cycles';
import {run} from '@cycle/run';
import {makeHTTPDriver} from '@cycle/http';
import reducers from './reducers';
import main from './cycles'


const configureStore = () => {

    const cycleMiddleware = createCycleMiddleware();
    const {makeActionDriver, makeStateDriver} = cycleMiddleware;

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(cycleMiddleware)
        )
    );

    run(main, {
        ACTION: makeActionDriver(),
        STATE: makeStateDriver(),
        HTTP: makeHTTPDriver(),
    });
    return store;
};

export default configureStore;

