import { useRoutesConfig } from "@/router/router.config"

const { NOT_FOUND } = useRoutesConfig()

const notFoundRoutes = [
    {
        path: NOT_FOUND.path,
        name: NOT_FOUND.name,
        component: () => import('@/views/NotFoundView.vue'),
    },
]

export default notFoundRoutes

