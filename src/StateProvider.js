import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

// The higher order Component StateProvider is used to wrap the App component
// mentioned in the index.js file page 

export const StateProvider = ({reducer, initialState, children}) => {

<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider> 
};

// when we pull something from the datalayer we use useStateValue hook 
export const useStateValue = () => useContext(StateContext);