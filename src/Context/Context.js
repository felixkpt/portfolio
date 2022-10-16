import React, { createContext, useReducer } from "react";

// create context
export const ThemeContext = createContext()

// initial state
const INITIAL_STATE = {
    darkMode: false
}

// reducer
const themeReducer = (state, action) => {
    console.log(state.darkMode)
    const { type } = action
    switch (type) {
        case 'toggle':
            return {...state, darkMode: !state.darkMode}
        default:
            return state
    }
}

// export context provider
const Context = ({ children }) => {
    // call above reducer
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default Context