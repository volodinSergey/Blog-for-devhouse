// import { useAllPostsAdapter } from "@/services/postsService/Posts.service.adapters"

export const useGetOneAdapter = (data) => {

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
        // author: post.author.username,
        // authorId: post.author.data.id,
        // authorAvatar: post.author.data.attributes?.avatar?.data?.attributes?.url,
    }))
    data.posts.map(post => console.log(post))

    const adaptedUser = {
        id: data.id,
        username: data.username,
        avatar: data?.avatar?.url || null,
        posts: adaptedPosts
    }

    return adaptedUser
}