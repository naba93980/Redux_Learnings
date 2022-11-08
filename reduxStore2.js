const { reducerCake, reducerIceCream, orderCake, restoreCake, orderIceCream, restoreIceCream } = require('./multipleStates_multipleRducers');
const redux = require('redux');
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;

const rootReducer = combineReducers({
    reducerCake,
    reducerIceCream
})

const store = createStore(rootReducer);


console.log('Initial state ---> ', store.getState());

const unsubscribe = store.subscribe(() => console.log('Update state ---->', store.getState()));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restoreCake());

store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(restoreIceCream())

unsubscribe();