import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Reducers are pure functions: the output is only determine by the input
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    // current state as 1st arguement, set default
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe( () => {
    // get called every time the store changes
    console.log(store.getState());
} );

// Actions - an object that gets sent to the store
// discribe the type of an Action we'd like to take: increment, decrement, reset: change store by dispatching different actions

// increment 
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));
// unsubscribe();

store.dispatch(incrementCount());

// reset the count
store.dispatch(resetCount());

// decrement
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));