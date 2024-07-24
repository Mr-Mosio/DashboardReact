import {createContext, useContext, useEffect, useState} from 'react';
import {
    getLang,
    getUserData,
    removeAuthToken,
    removeUserData,
    setAuthToken,
    setLang,
    storeUserData,
} from '../utils/localstorage.js';
import {useTranslation} from 'react-i18next';

export const UserContext = createContext({
    user: getUserData(),
    permissions: getUserData() ? getUserData()?.permissions : {},
    lang: getLang(),
    login:(user,token) => {},
    logout:() => {},
    setUser: (user) => {},
    changeLanguage: (lang) => {},
})

export default function UserContextProvider(props) {
    const context = useContext(UserContext)
    const [state, setState] = useState(context)
    const { i18n } = useTranslation()

    function login(user, token) {
        setAuthToken(token)
        storeUserData({
            ...user,
            fullname: user.first_name + " " + user.last_name,
        })
        setState({...state, user : {
                ...user,
                fullname: user.first_name + " " + user.last_name,
            }, permissions: user.permissions})
    }
    function logout() {
        removeUserData()
        removeAuthToken()
    }
    function setUser(user) {
        storeUserData({
            ...user,
            fullname: user.first_name + " " + user.last_name,
        })
        setState({...state, user : {
                ...user,
                fullname: user.first_name + " " + user.last_name,
            }, permissions: user.permissions})
    }
    function changeLanguage(lang) {
        setLang(lang)
    }

    useEffect(() => {
        if (state.lang) {
            document.dir = state.lang.dir
            document.querySelector("html").lang = state.lang.lang
            i18n.changeLanguage(state.lang.lang)
        }
    }, [])


    return <UserContext.Provider value={{...state, login, setUser, logout, changeLanguage}}>
        {props.children}
    </UserContext.Provider>
}
export function useUser() {
    return useContext(UserContext)
}

