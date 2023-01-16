export const getterTypes = {
    isAuth: '[auth] isAuth',
    isAdmin: '[auth] isAdmin',
    currentUser: '[auth] current user',
    currentUserId: '[auth] current user id'
}

export const mutationTypes = {
    registerPending: '[auth] register pending',
    registerFullfilled: '[auth] register fullfilled',
    registerRejected: '[auth] register rejected',

    loginPending: '[auth] login pending',
    loginFullfilled: '[auth] login fullfilled',
    loginRejected: '[auth] login rejected',

    getCurrentUserPending: '[auth] getCurrentUser pending',
    getCurrentUserFullfilled: '[auth] getCurrentUser fullfilled',
    getCurrentUserRejected: '[auth] getCurrentUser rejected',

    logout: '[auth] logout'
}

export const actionTypes = {
    REGISTER: '[auth] register',
    LOGIN: '[auth] login',
    GET_CURRENT_USER: '[auth] get current user',
    LOGOUT: '[auth] logout'
}