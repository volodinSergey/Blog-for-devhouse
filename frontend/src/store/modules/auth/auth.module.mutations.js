import { mutationTypes } from '@/store/modules/auth/auth.module.types'

const mutations = {
    [mutationTypes.registerPending](state) {
        state.isLoading = true
        state.currentUser = null
    },

    [mutationTypes.registerFullfilled](state, userPayload) {
        state.isLoading = false
        state.currentUser = userPayload
    },

    [mutationTypes.registerRejected](state) {
        state.isLoading = false
        state.currentUser = null
    },

    [mutationTypes.loginPending](state) {
        state.isLoading = true
        state.currentUser = null
    },

    [mutationTypes.loginFullfilled](state, userPayload) {
        state.isLoading = false
        state.currentUser = userPayload
    },

    [mutationTypes.loginRejected](state) {
        state.isLoading = false
        state.currentUser = null
    },

    [mutationTypes.logout](state) {
        state.isLoading = false
        state.currentUser = null
    },

    [mutationTypes.getCurrentUserPending](state) {
        state.isLoading = true
        state.currentUser = null
    },

    [mutationTypes.getCurrentUserFullfilled](state, userPayload) {
        state.isLoading = false
        state.currentUser = userPayload
    },

    [mutationTypes.getCurrentUserRejected](state) {
        state.isLoading = false
        state.currentUser = null
    },

}

export default mutations