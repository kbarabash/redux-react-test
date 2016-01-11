import DevTools from '../../../components/dev-tools';
import { compose, createStore, combineReducers } from 'redux';
import routes from '../routes';
import createHashHistory from 'history/lib/createHashHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { reduxReactRouter, routerStateReducer } from 'redux-router';

const isHash = true;
const createHistory = (isHash ? createHashHistory : createBrowserHistory);

const finalCreateStore = compose(
    reduxReactRouter({ routes, createHistory}),
    DevTools.instrument()
)(createStore);

const reducer = combineReducers({
    router: routerStateReducer
});

export default finalCreateStore(reducer);
