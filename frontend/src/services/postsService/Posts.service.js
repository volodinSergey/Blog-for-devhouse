import Axios from '@/api/axios'

import { useAllPostsAdapter } from '@/services/postsService/Posts.service.adapters'

const PostsService = {
    getAll: async () => {
        const { data } = await Axios.get('/api/posts')

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

            comments: post.comments
        }))
        console.warn(adaptedPosts)
        // const adaptedPosts = useAllPostsAdapter(data)

        return adaptedPosts
    },

    getOne: async (id) => {
        const { data } = await Axios.get(`/api/posts/${id}`)

        const adaptedPost = {
            title: data.data.attributes.title,
            body: data.data.attributes.body,
            likes: data.data.attributes.likes,
            liked: data.data.attributes.liked,
            image: data.data?.attributes?.image?.data?.attributes?.url
        }

        return adaptedPost
    },

    create: async (newPostData) => await Axios.post('/api/posts', newPostData),

    delete: async (id) => await Axios.delete(`/api/posts/${id}`)
}

export default PostsService