const redux = require('redux');
const produce = require('immer').produce;

const createStore = redux.createStore;

const initialState = {
    name: 'Nabajyoti',
    address: {
        street: 'Dhaleswar, Road Number 14',
        city: 'Agartala',
        state: 'Tripura'
    }
}

const STREET_UPDATED = 'STREET_UPDATED';

// action creater
const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

// -------- reducer function -------
const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        // case STREET_UPDATED: return ({
        //     ...state,
        //     address: {
        //         ...state.address,
        //         street: action.payload
        //     }
        // });

        // using immer - > draft object acts as a mutable object
        case STREET_UPDATED:
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            });
        default: return state;
    }
}

const store = createStore(reducer)

console.log('Initial state ---> ', store.getState());

const unsubscribe = store.subscribe(() => console.log('Update state ---->', store.getState()));

store.dispatch(updateStreet('kargil bazar, rd no 14'));

unsubscribe();