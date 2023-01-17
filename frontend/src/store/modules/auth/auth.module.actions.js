import { actionTypes, mutationTypes } from "@/store/modules/auth/auth.module.types"

import AuthService from "@/services/authService/Auth.service"

const actions = {
    async [actionTypes.REGISTER]({ commit }, registrationData) {
        try {
            commit(mutationTypes.registerPending)

            const jwtToken = await AuthService.register(registrationData)

            localStorage.setItem('jwtToken', jwtToken)

            const currentUser = await AuthService.getCurrentUser(registrationData)

            localStorage.setItem('role', currentUser.role)

            commit(mutationTypes.registerFullfilled, currentUser)
        } catch (err) {
            commit(mutationTypes.registerRejected)

            throw new Error(err)
        }
    },

    async [actionTypes.LOGIN]({ commit }, loginData) {
        try {
            commit(mutationTypes.loginPending)

            const jwtToken = await AuthService.login(loginData)

            localStorage.setItem('jwtToken', jwtToken)

            const currentUser = await AuthService.getCurrentUser()

            localStorage.setItem('role', currentUser.role)

            commit(mutationTypes.loginFullfilled, currentUser)
        } catch (err) {
            commit(mutationTypes.loginRejected)
            throw new Error(err)

        }
    },

    [actionTypes.LOGOUT]({ commit }) {
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('role')

        commit(mutationTypes.logout)
    },

    async [actionTypes.GET_CURRENT_USER]({ commit }) {
        try {
            commit(mutationTypes.getCurrentUserPending)

            const currentUser = await AuthService.getCurrentUser()

            localStorage.setItem('role', currentUser.role)

            commit(mutationTypes.getCurrentUserFullfilled, currentUser)
        } catch (err) {
            commit(mutationTypes.getCurrentUserRejected)

            throw new Error(err)
        }
    },
}

export default actions