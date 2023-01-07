export const useGetOneAdapter = (data) => {
    const adaptedUser = {
        id: data.id,
        username: data.username,
        avatar: data?.avatar?.url || null,
        posts: data.posts

    }

    return adaptedUser
}