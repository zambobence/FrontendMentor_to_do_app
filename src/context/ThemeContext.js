import React, { useState, useMemo, createContext } from 'react'

const ThemeContext = createContext()

function ThemeContextProvider({ children }) {
  const [on, setOn] = useState(true)

  function toggleTheme() {
    setOn((prevState) => !prevState)
  }
  const value = useMemo(() => ({ on, toggleTheme }), [on])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider, ThemeContext }
