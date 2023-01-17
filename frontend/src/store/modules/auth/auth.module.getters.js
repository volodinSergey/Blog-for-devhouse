import { getterTypes } from '@/store/modules/auth/auth.module.types'

const getters = {
    [getterTypes.isAuth]: (state) => !!state?.currentUser,
    [getterTypes.isAdmin]: (state) => state.currentUser?.role === 'Admin',
    [getterTypes.currentUserId]: state => state?.currentUser?.id,
    [getterTypes.currentUser]: state => state.currentUser,
}

export default getters