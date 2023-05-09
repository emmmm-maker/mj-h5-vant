const KEY = 'my-token-vant-mobile'

export const setToken = (data) => {
  localStorage.setItem(KEY, JSON.stringify(data))
}

export const getToken = () => {
  return localStorage.getItem(KEY)
}

export const removeToken = () => {
  localStorage.removeItem(KEY)
}
