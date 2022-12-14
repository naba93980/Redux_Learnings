const { reducer, orderCake, restoreCake, orderIceCream, restoreIceCream } = require('./multipleStateProps_singleReducer');
const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreaters = redux.bindActionCreators;

// redux store holds app new state every time an action occurs
const store = createStore(reducer)

console.log('Initial state ---> ', store.getState());

const unsubscribe = store.subscribe(() => console.log('Update state ---->', store.getState()));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restoreCake());

store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(restoreIceCream())

// alternate using bindActionCreaters
// const actions = bindActionCreaters({ orderCake, restoreCake }, store.dispatch);
// actions.orderCake();
// actions.orderCake();
// actions.orderCake();
// actions.restoreCake();

unsubscribe();
