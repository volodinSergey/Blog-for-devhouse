import Axios from '@/api/axios'

import { useAllPostsAdapter, usePostAdapter } from '@/services/postsService/Posts.service.adapters'

const PostsService = {
    getAll: async () => {
        const { data } = await Axios.get('/api/posts')

        const adaptedPosts = useAllPostsAdapter(data)

        return adaptedPosts
    },

    getUserPosts: async (userId) => {
        const { data } = await Axios.get(`/api/posts/user/${userId}`)

        const adaptedPosts = useAllPostsAdapter(data)

        return adaptedPosts
    },

    create: async (newPostData) => {
        const { data } = await Axios.post('/api/posts', newPostData)

        const adaptedPost = usePostAdapter(data)

        return adaptedPost
    },

    delete: async (id) => await Axios.delete(`/api/posts/${id}`)
}

export default PostsService