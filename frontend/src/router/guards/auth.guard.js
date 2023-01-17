import { useRoutesConfig } from "@/router/router.config"

const { LOGIN } = useRoutesConfig()

export const isAuthGuard = ({ isRequiresAuth, isRequiresAdminRoots, next }) => {
    const isAuth = !!localStorage.getItem('jwtToken')
    const isAdmin = !!localStorage.getItem('role')

    if (isRequiresAuth && isAuth || isRequiresAdminRoots && isAdmin) return next()

    return next({ name: LOGIN.name })
}