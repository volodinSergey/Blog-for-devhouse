import AuthService from "@/services/authService/Auth.service"

const state = {
    isLoading: false,
    currentUser: null,
}

const getters = {
    isAuth: state => !!state.currentUser,
    isAdmin: state => state.currentUser?.role === 'Admin',
    currentUserId: state => state.currentUser.id,
    currentUser: state => state.currentUser,
}

const mutationTypes = {
    registerPending: '[auth] register pending',
    registerFullfilled: '[auth] register fullfilled',
    registerRejected: '[auth] register rejected',

    loginPending: '[auth] login pending',
    loginFullfilled: '[auth] login fullfilled',
    loginRejected: '[auth] login rejected',

    logout: '[auth] logout'
}

const mutations = {
    [mutationTypes.registerPending]: (state) => {
        state.isLoading = true
        state.currentUser = null
    },

    [mutationTypes.registerFullfilled]: (state, userPayload) => {
        state.isLoading = false
        state.currentUser = userPayload
    },

    [mutationTypes.registerRejected]: (state) => {
        state.isLoading = false
        state.currentUser = null
    },

    [mutationTypes.loginPending]: (state) => {
        state.isLoading = true
        state.currentUser = null
    },

    [mutationTypes.loginFullfilled]: (state, userPayload) => {
        state.isLoading = false
        state.currentUser = userPayload
    },

    [mutationTypes.loginRejected]: (state) => {
        state.isLoading = false
        state.currentUser = null
    },

    [mutationTypes.logout]: (state) => {
        state.isLoading = false
        state.currentUser = null
    },

}

const actions = {
    async register({ commit }, registrationData) {
        try {
            commit(mutationTypes.registerPending)

            const jwtToken = await AuthService.register(registrationData)

            localStorage.setItem('jwtToken', jwtToken)

            const currentUser = await AuthService.getCurrentUser(registrationData)

            commit(mutationTypes.registerFullfilled, currentUser)
        } catch (err) {
            commit(mutationTypes.registerRejected)

            throw new Error(err)
        }
    },

    async login({ commit }, loginData) {
        try {
            commit(mutationTypes.loginPending)

            const jwtToken = await AuthService.login(loginData)

            localStorage.setItem('jwtToken', jwtToken)

            const currentUser = await AuthService.getCurrentUser()

            commit(mutationTypes.loginFullfilled, currentUser)
        } catch (err) {
            commit(mutationTypes.loginRejected)
            throw new Error(err)

        }
    },

    logout({ commit }) {
        localStorage.removeItem('jwtToken')

        commit(mutationTypes.logout)
    },

    async getCurrentUser({ commit }) {
        try {
            commit(mutationTypes.registerPending)

            const currentUser = await AuthService.getCurrentUser()

            commit(mutationTypes.registerFullfilled, currentUser)
        } catch (err) {
            commit(mutationTypes.registerRejected)

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

// const state = {
//     isLoading: false,
//     currentUser: null,
//     role: null
// }

// const getters = {
//     isAuth: state => !!state.currentUser,
//     isAdmin: state => state.role === 'Admin',
//     currentUser: state => state.currentUser,
//     currentUserId: state => state.user.id,

// }

// const mutationTypes = {
//     registerPending: '[register] pending',
//     registerFullfilled: '[register] fullfilled',
//     registerRejected: '[register] rejected',
// }

// // const mutations = {
// //     setIsLoading: (state, loadingPayload) => state.isLoading = loadingPayload,
// //     setUser: (state, userPayload) => state.user = userPayload,
// //     setToken: (state, tokenPayload) => state.token = tokenPayload,
// //     setRole: (state, rolePayload) => state.role = rolePayload,
// // }
// const mutations = {
//     [mutationTypes.registerPending]: (state) => {
//         state.isLoading = true,
//             state.currentUser = null,
//             state.role = null
//     },

//     [mutationTypes.registerFullfilled]: (state, ) => {
//         state.isLoading = true,
//             state.currentUser = null,
//             state.role = null
//     },

// }

// const actions = {
//     async register({ commit }, registrationData) {
//         try {
//             commit('setIsLoading', true)

//             const res = await AuthService.register(registrationData)

//             const user = res.data.user // ! Сразу вернуть трансформированные данные юзера из сервиса

//             if (res.data?.jwt) {
//                 localStorage.setItem('jwt', res.data?.jwt)
//             }

//             const currentUser = await AuthService.getMe()

//             const userRole = currentUser.role.name

//             commit('setIsLoading', false)
//             commit('setUser', user)
//             commit('setRole', userRole)
//         } catch (err) {
//             commit('setIsLoading', false)
//             throw new Error(err)
//         }
//     },

//     async login({ commit }, loginData) {
//         try {
//             commit('setIsLoading', true)

//             const res = await AuthService.login(loginData)

//             if (res.data.jwt) {
//                 localStorage.setItem('jwt', res.data.jwt)
//             }

//             const currentUser = await AuthService.getMe()

//             const userRole = currentUser.role.name

//             commit('setUser', res.data.user)
//             commit('setRole', userRole)
//             commit('setIsLoading', false)
//         } catch (err) {
//             commit('setIsLoading', false)
//             throw new Error(err)

//         }
//     },

//     logout({ commit }) {
//         localStorage.removeItem('jwt')

//         commit('setUser', null)
//         commit('setIsLoading', false)
//         commit('setRole', null)


//     },

//     async getMe({ commit }) {
//         try {
//             commit('setIsLoading', true)

//             const me = await AuthService.getMe()
//             const role = me.role.name

//             if (me?.jwt) {
//                 localStorage.setItem('jwt', me?.jwt)
//             }

//             commit('setUser', me)
//             commit('setIsLoading', false)
//             commit('setRole', role)
//         } catch (err) {
//             commit('setIsLoading', false)
//             throw new Error(err)
//         }
//     },
// }

// export default {
//     state,
//     mutations,
//     actions,
//     getters
// }