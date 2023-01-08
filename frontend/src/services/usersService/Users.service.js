import Axios from "@/api/axios";

import { useGetOneAdapter } from "@/services/usersService/Users.service.adapters";

const UsersService = {
    getAll: async () => {
        const { data } = await Axios.get('/api/users')

        return data
    },

    getOne: async (id) => {
        const { data } = await Axios.get(`/api/users/${id}?populate[posts][populate]=*&populate[avatar]=*`)
        const adaptedUser = useGetOneAdapter(data)

        return adaptedUser
    },

}

export default UsersService