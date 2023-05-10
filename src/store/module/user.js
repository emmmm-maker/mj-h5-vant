import { userLogin } from '@/api/user'
import { getToken, setToken } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    token: getToken() || ''
  },
  mutations: {
    setToken (state, data) {
      state.token = data
    }
  },
  getters: {},
  actions: {
    async login (context, data) {
      const res = await userLogin(data)
      setToken(res.data.token)
      context.commit('setToken', res.data.token)
    }
  }
}
