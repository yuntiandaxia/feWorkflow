import { createStore } from 'redux';
import reducer from '../reducer/reducer';

//
// export default createStore(reducer);
// import {compose, createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import {devTools} from 'redux-devtools';

// export default function store(initialState) {
//   let middlewares = [
//     applyMiddleware(thunk),
//     devTools(),
//   ];

//   const store = compose(...middlewares)(createStore);

//   return store(reducer, initialState);
// }

export default createStore(reducer);
