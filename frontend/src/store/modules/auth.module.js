import AuthService from "@/services/Auth.service"

const state = {
    isLoading: false,
    user: null,
    token: null,
    role: null
}

const getters = {
    isAuth: state => Boolean(state.user),
    isAdmin: state => state.role === 'Admin',
    user: state => state.user,
    currentUserId: state => state.user.id,

}

const mutations = {
    setIsLoading: (state, loadingPayload) => state.isLoading = loadingPayload,
    setUser: (state, userPayload) => state.user = userPayload,
    setToken: (state, tokenPayload) => state.token = tokenPayload,
    setRole: (state, rolePayload) => state.role = rolePayload,
}

const actions = {
    async register({ commit }, registrationData) {
        try {
            commit('setIsLoading', true)

            const res = await AuthService.register(registrationData)

            const user = res.data.user // ! Сразу вернуть трансформированные данные юзера из сервиса

            if (res.data?.jwt) {
                localStorage.setItem('jwt', res.data?.jwt)
                commit('setToken', res.data?.jwt)
            }

            commit('setUser', user)
            commit('setIsLoading', false)
        } catch (err) {
            commit('setIsLoading', false)
            throw new Error(err)
        }
    },

    async login({ commit }, loginData) {
        try {
            commit('setIsLoading', true)

            const res = await AuthService.login(loginData)

            if (res.data.jwt) {
                localStorage.setItem('jwt', res.data.jwt)
            }

            const currentUser = await AuthService.getMe()
            const userRole = currentUser.role.name

            commit('setUser', res.data.user)
            commit('setRole', userRole)
            commit('setToken', res.data.jwt)
            commit('setIsLoading', false)
        } catch (err) {
            commit('setIsLoading', false)
            throw new Error(err)

        }
    },

    logout({ commit }) {
        localStorage.removeItem('jwt')

        commit('setUser', null)
        commit('setIsLoading', false)


    },

    async getMe({ commit }) {
        try {
            commit('setIsLoading', true)

            const me = await AuthService.getMe()

            if (me?.jwt) {
                localStorage.setItem('jwt', me?.jwt)
            }

            commit('setUser', me)
            commit('setIsLoading', false)
        } catch (err) {
            commit('setIsLoading', false)
            throw new Error(err)
        }
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}