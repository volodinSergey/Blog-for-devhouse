import { useRoutesConfig } from "@/router/router.config"

const { REGISTER, LOGIN } = useRoutesConfig()

const authRoutes = [
    {
        path: LOGIN.path,
        name: LOGIN.name,
        component: () => import('@/views/LoginView.vue'),
    },

    {
        path: REGISTER.path,
        name: REGISTER.name,
        component: () => import('@/views/RegisterView.vue'),
    },
]

export default authRoutes

