import React from 'react'
import { useContext, useState } from 'react'


const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [on, setOn] = React.useState(true)
  
    function toggleTheme(){
        setOn(prevState => !prevState)
    }


    return (
    <ThemeContext.Provider value={{on, toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export {ThemeContextProvider, ThemeContext}