const routesConfig = {
    HOME: {
        path: '/',
        name: 'postsView'
    },

    REGISTER: {
        path: '/register',
        name: 'registerView'
    },

    LOGIN: {
        path: '/login',
        name: 'loginView'
    },

    POSTS: {
        path: '/posts',
        name: 'postsView'
    },

    USERS: {
        path: '/users',
        name: 'usersView'
    },

    USER: {
        path: '/users/:id',
        name: 'userView'
    },

    NOT_FOUND: {
        path: '*',
        name: 'notFoundView'
    }
}

const { HOME, REGISTER, LOGIN, POSTS, USERS, USER, NOT_FOUND } = routesConfig

export const useRoutesConfig = () => {
    return {
        HOME,
        REGISTER,
        LOGIN,
        POSTS,
        USERS,
        USER,
        NOT_FOUND
    }
}