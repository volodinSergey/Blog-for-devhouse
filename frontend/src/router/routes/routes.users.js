import { useRoutesConfig } from "@/router/router.config"

const { USERS, USER } = useRoutesConfig()

const usersRoutes = [
    {
        path: USERS.path,
        name: USERS.name,
        component: () => import('@/views/UsersView.vue'),
    },

    {
        path: USER.path,
        name: USER.name,
        component: () => import('@/views/UserView.vue'),
    },
]

export default usersRoutes

