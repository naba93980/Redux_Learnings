const redux = require('redux')
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// use redux-logger library to get readymade logger function
const reduxLogger = require('redux-logger');
const loggerMiddleware = reduxLogger.createLogger();


const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';


// --------- store object -------
const initialState = {
    numOfCakes: 10,
}


// function to dispatch action object
function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    };
}

function restoreCake() {
    return {
        type: CAKE_RESTOCKED,
        quantity: 10,
    }
}

// -------- reducer function -------
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED: return ({
            ...state,
            numOfCakes: state.numOfCakes - 1
        });
        case CAKE_RESTOCKED: return ({
            ...state,
            numOfCakes: action.quantity
        });
        default: return state;
    }
}

const store = createStore(reducer,applyMiddleware(loggerMiddleware));

console.log('Initial state ---> ', store.getState());

const unsubscribe = store.subscribe(() => console.log('Update state ---->', store.getState()));

store.dispatch(orderCake());

unsubscribe();