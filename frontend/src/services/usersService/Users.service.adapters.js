import { useAllPostsAdapter } from '@/services/postsService/Posts.service.adapters'

export const useGetOneAdapter = (data) => {

    // Use postsAdapter here ?????.....
    // const adaptedPosts = data.posts.map(post => ({
    //     id: post.id,
    //     title: post.title,
    //     body: post.body,
    //     likes: post.likes || 0,
    //     liked: post.liked,
    //     image: post.image?.url || null,
    //     author: post.author.username,
    //     authorId: post.author.id,
    //     authorAvatar: data.avatar.url
    // }))

    const adaptedPosts = useAllPostsAdapter(data.posts)

    const adaptedUser = {
        id: data.id,
        username: data.username,
        avatar: data?.avatar?.url,
        posts: adaptedPosts
    }

    return adaptedUser
}