import mutations from '@/store/modules/auth/auth.module.mutations'
import actions from "@/store/modules/auth/auth.module.actions"
import getters from '@/store/modules/auth/auth.module.getters'

const state = {
    isLoading: false,
    currentUser: null,
}

export default {
    state,
    mutations,
    actions,
    getters
}