export const getStorage = () => {
  return window.localStorage ;
}
export function getAuthToken() {
  return getStorage().getItem("AUTH_TOKEN")
}
export function removeAuthToken() {
  return getStorage().removeItem("AUTH_TOKEN")
}
export function setAuthToken(token) {
  return getStorage().setItem("AUTH_TOKEN", token)
}

export function getLocalTheme() {
  return getStorage().getItem("theme")
}
export function setLocalTheme(theme) {
  return getStorage().setItem("theme", theme)
}

export function storeUserData(user) {
  return getStorage().setItem("USER_DATA", JSON.stringify(user))
}
export function getUserData() {
  return getStorage().getItem("USER_DATA") ? JSON.parse(getStorage().getItem("USER_DATA")) : null
}
export function getLang() {
  return getStorage().getItem("LANGUAGE") ? JSON.parse(getStorage().getItem("LANGUAGE")) : {
    lang: "fa",
    dir: "rtl"
  }
}

export function setLang(lang) {
  return getStorage().setItem("LANGUAGE", JSON.stringify({
    lang: lang.code,
    dir: lang.dir,
  }))
}
export function removeUserData() {
  return getStorage().removeItem("USER_DATA")
}

export function getAuthHeaders() {
  const token = getAuthToken() ;
  if (token) {
    return {
      "Authorization": `Bearer ${getAuthToken()}`
    }
  }
  return {}
}
