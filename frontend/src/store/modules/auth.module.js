import AuthService from "@/services/Auth.service"

const state = {
    isLoading: false,
    user: null,
    token: null,
    // role: null
}

const getters = {
    isAuth: state => Boolean(state.token),
    ownerId: state => state.user.id,
    // userRole: state => state.role
}

const mutations = {
    setIsLoading: (state, loadingPayload) => state.isLoading = loadingPayload,
    setUser: (state, userPayload) => state.user = userPayload,
    setToken: (state, tokenPayload) => state.token = tokenPayload,
    // setRole: (state, rolePayload) => state.role = rolePayload,
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
            // const meRes = await AuthService.getMe()

            // console.warn(warn)
            // const role = meRes.datarole.name

            const user = res.data.user
            console.warn(user)

            if (res.data.jwt) {
                localStorage.setItem('jwt', res.data.jwt)
            }

            commit('setUser', user)
            // commit('setRole', role)
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
        commit('setToken', null)
        commit('setRole', null)
        commit('setIsLoading', false)


    },

    async getMe({ commit }) {
        try {
            commit('setIsLoading', true)

            const res = await AuthService.getMe()
            const role = res.data.role.name
            const user = res.data

            if (res.data?.jwt) {
                localStorage.setItem('jwt', res.data?.jwt)
            }

            commit('setUser', user)
            commit('setRole', role)
            commit('setToken', localStorage.getItem('jwt'))
            commit('setIsLoading', false)
        } catch (err) {
            commit('setIsLoading', false)
        }
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}