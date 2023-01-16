export const useCurrentUserAdapter = (currentUserData) => ({
    id: currentUserData.id,
    username: currentUserData.username,
    avatar: currentUserData.avatar?.url,
    role: currentUserData.role.name
})