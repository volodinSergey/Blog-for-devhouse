import { useRoutesConfig } from "@/router/router.config"

const { USERS, USER } = useRoutesConfig()

import { isAuthGuard } from "@/router/guards/auth.guard"

const usersRoutes = [
    {
        path: USERS.path,
        name: USERS.name,
        component: () => import('@/views/UsersView.vue'),
        meta: {
            auth: true,
            admin: true,

            guards: [
                isAuthGuard
            ]
        }
    },

    {
        path: USER.path,
        name: USER.name,
        component: () => import('@/views/UserView.vue'),
    },
]

export default usersRoutes

