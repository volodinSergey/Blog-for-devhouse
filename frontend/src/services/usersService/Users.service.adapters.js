export const useAllUsersAdapter = (data) => {
    const adaptedUsers = data.map(user => ({
        id: user.id,
        name: user.username,
        avatar: user.avatar?.url
    }))

    return adaptedUsers
}

export const useGetOneAdapter = (data) => {
    const adaptedUser = {
        id: data.id,
        username: data.username,
        avatar: data?.avatar?.url,
    }

    return adaptedUser
}