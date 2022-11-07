const CAKE_ORDERED = 'CAKE_ORDERED';

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

// -------- reducer function -------
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED: return ({
            ...state,
            numOfCakes: numOfCakes - 1
        });
        default: return state;
    }
}
