import reducer from './reducer';
import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));