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

module.exports = {
    reducer,
    orderCake,
    restoreCake
}