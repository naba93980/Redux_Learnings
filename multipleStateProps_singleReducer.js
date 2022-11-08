const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

// --------- store object -------
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 10
}


// function to dispatch action object
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    };
}

function restoreCake() {
    return {
        type: CAKE_RESTOCKED,
        payload: 10,
    }
}

function orderIceCream() {
    return {
        type: ICECREAM_ORDERED,
        payload: 1
    };
}

function restoreIceCream() {
    return {
        type: ICECREAM_RESTOCKED,
        payload: 10,
    }
}

// -------- reducer function -------
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED: return ({
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        });
        case CAKE_RESTOCKED: return ({
            ...state,
            numOfCakes: action.payload
        });
        case ICECREAM_ORDERED: return ({
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload
        });
        case ICECREAM_RESTOCKED: return ({
            ...state,
            numOfIceCreams: action.payload
        });
        default: return state;
    }
}

module.exports = {
    reducer,
    orderCake,
    restoreCake,
    orderIceCream,
    restoreIceCream
}