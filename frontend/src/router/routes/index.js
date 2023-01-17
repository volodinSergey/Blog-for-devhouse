import homeRoutes from '@/router/routes/routes.home'
import authRoutes from '@/router/routes/routes.auth'
import postsRoutes from '@/router/routes/routes.posts'
import usersRoutes from '@/router/routes/routes.users'
import notFoundRoutes from '@/router/routes/routes.not-found'

const routes = [
    ...homeRoutes,
    ...authRoutes,
    ...postsRoutes,
    ...usersRoutes,
    ...notFoundRoutes
]

export default routes