import React,{useState,createContext} from 'react'
const AppThemeContext=createContext({});
const ThemeContextProvider = ({children}) => {
    const [darkMode,setDarkMode]=useState('black');
  return (
    <AppThemeContext.Provider value={{darkMode,setDarkMode}}>
    {children}
 </AppThemeContext.Provider>
  )
}
export {AppThemeContext,ThemeContextProvider}