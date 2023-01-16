import Axios from '@/api/axios'

import { useCurrentUserAdapter } from '@/services/authService/Auth.service.adapters'

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

        const adaptedCurrentUser = useCurrentUserAdapter(currentUser)

        return adaptedCurrentUser
    }
}

export default AuthService