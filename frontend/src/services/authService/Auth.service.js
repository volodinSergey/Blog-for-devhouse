import Axios from '@/api/axios'

const AuthService = {
    register: async (registrationData) => {
        const { data } = await Axios.post('/api/auth/local/register', registrationData)

        return data.jwt
    },

    login: async (loginData) => {
        const { data } = await Axios.post('/api/auth/local', loginData)

        return data.jwt
    },

    getCurrentUser: async () => {
        const { data: currentUser } = await Axios.get('/api/users/me?populate=*')

        const adaptedCurrentUser = {
            id: currentUser.id,
            username: currentUser.username,
            avatar: currentUser.avatar?.url,
            role: currentUser.role.name
        }

        return adaptedCurrentUser
    }
}

export default AuthService