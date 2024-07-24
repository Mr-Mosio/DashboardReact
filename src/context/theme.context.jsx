import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {getLocalTheme, setLocalTheme} from '../utils/localstorage.js';

const ThemeContext = createContext({
  title: "",
  theme: getLocalTheme() ?? "light",
  toggleTheme: () => {}
})

export const ThemeContextProvider = ({children}) => {
  const context = useContext(ThemeContext)
  const [state, setState] = useState(context)

  const setTitle = useCallback((title) => {
    useEffect(() => {
      setState(old => ({...old, title}))
    }, []);
  }, [state])

  const toggleTheme = useCallback(() =>{
    setState(prev => {
      setLocalTheme(prev.theme === "light" ? "dark": "light")
      return ({...prev, theme: prev.theme === "light" ? "dark": "light"})
    })
  }, [])

  return <ThemeContext.Provider value={{...state, setTitle, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
}

export const useTheme = () => {
  return useContext(ThemeContext)
}