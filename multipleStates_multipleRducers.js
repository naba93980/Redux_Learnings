const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 10
}

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

const reducerCake = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED: return ({
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        });
        case CAKE_RESTOCKED: return ({
            ...state,
            numOfCakes: action.payload
        });
        default: return state;
    }
}
const reducerIceCream = (state = initialIceCreamState, action) => {
    switch (action.type) {
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
    reducerCake,
    reducerIceCream,
    orderCake,
    restoreCake,
    orderIceCream,
    restoreIceCream
}