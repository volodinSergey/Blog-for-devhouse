import Axios from "@/api/axios";

import { useGetOneAdapter, useAllUsersAdapter } from "@/services/usersService/Users.service.adapters";

const UsersService = {
    getAll: async () => {
        const { data } = await Axios.get('/api/users?populate=*')

        const adaptedUsers = useAllUsersAdapter(data)

        return adaptedUsers
    },

    getOne: async (id) => {
        const { data } = await Axios.get(`/api/users/${id}?populate[avatar]=*`)

        const adaptedUser = useGetOneAdapter(data)

        return adaptedUser
    },

    deleteUser: async (id) => await Axios.delete(`/api/users-permissions/users/${id}`)
}

export default UsersService