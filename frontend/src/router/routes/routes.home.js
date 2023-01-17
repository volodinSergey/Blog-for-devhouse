import PostsView from "@/views/PostsView.vue"

import { useRoutesConfig } from "@/router/router.config"

const { HOME } = useRoutesConfig()

const homeRoutes = [
    {
        path: HOME.path,
        name: HOME.name,
        component: PostsView
    },
]

export default homeRoutes

