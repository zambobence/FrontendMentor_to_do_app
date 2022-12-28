import React, { useContext, useState, useMemo } from 'react'

const ThemeContext = React.createContext()

function ThemeContextProvider({ children }) {
  const [on, setOn] = React.useState(true)

  function toggleTheme() {
    setOn((prevState) => !prevState)
  }
  const value = useMemo(() => ({ on, toggleTheme }), [on])

  return (
    <ThemeContext.Provider value={value}>
      {/*
   <ThemeContext.Provider value={{ on, toggleTheme }}>
   */}
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider, ThemeContext }
