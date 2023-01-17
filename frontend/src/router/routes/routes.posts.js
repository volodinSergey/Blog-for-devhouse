import PostsView from '@/views/PostsView.vue'

import { useRoutesConfig } from "@/router/router.config"

const { POSTS } = useRoutesConfig()

const postsRoutes = [
    {
        path: POSTS.path,
        name: POSTS.name,
        component: PostsView
    },
]

export default postsRoutes

