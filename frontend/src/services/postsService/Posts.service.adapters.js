import { useCommentsAdapter } from "@/services/commentsService/Comments.service.adapters"

export const usePostAdapter = post => {
    const adaptedPost = {
        id: post.id,
        title: post.title,
        body: post.body,
        image: post.image?.url,
        liked: post.liked,
        likes: post.likes,

        author: {
            id: post.author.id,
            name: post.author.username,
            avatar: post.author.avatar?.url
        },

        comments: useCommentsAdapter(post.comments)
    }

    return adaptedPost
}

export const useAllPostsAdapter = data => {

    // !To refactor!
    const adaptedPosts = data.map(post => ({
        id: post.id,
        title: post.title,
        body: post.body,
        image: post.image?.url,
        liked: post.liked,
        likes: post.likes,

        author: {
            id: post.author.id,
            name: post.author.username,
            avatar: post.author.avatar?.url
        },

        comments: useCommentsAdapter(post.comments)
    }))


    return adaptedPosts
}