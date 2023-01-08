export const useGetOneAdapter = (data) => {

    // Use postsAdapter here ?????.....
    const adaptedPosts = data.posts.map(post => ({
        id: post.id,
        title: post.title,
        body: post.body,
        likes: post.likes || 0,
        liked: post.liked,
        image: post.image?.url || null,
        author: post.author.username,
        authorId: post.author.id,
        authorAvatar: data.avatar.url
    }))

    const adaptedUser = {
        id: data.id,
        username: data.username,
        avatar: data?.avatar?.url || null,
        posts: adaptedPosts
    }

    return adaptedUser
}