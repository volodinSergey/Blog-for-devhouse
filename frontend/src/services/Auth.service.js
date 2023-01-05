import Axios from '@/api/axios'

const AuthService = {
    register: async (registrationData) => {
        const registerationResponse = await Axios.post('/api/auth/local/register', registrationData)

        return registerationResponse
    },

    login: async (loginData) => {
        const loginResponse = await Axios.post('/api/auth/local', loginData)

        return loginResponse
    },

    getMe: async () => {
        const meResponse = await Axios.get('api/users/me?populate=*')

        return meResponse
    }
}

export default AuthService