import Axios from '@/api/axios'

import { useAllPostsAdapter } from '@/services/postsService/Posts.service.adapters'

const PostsService = {
    getAll: async () => {
        const { data } = await Axios.get('/api/posts')

        const adaptedPosts = useAllPostsAdapter(data)

        return adaptedPosts
    },

    getOne: async (id) => {
        const { data } = await Axios.get(`/api/posts/${id}`)

        // !To do post adapter
        const adaptedPost = {
            title: data.data.attributes.title,
            body: data.data.attributes.body,
            likes: data.data.attributes.likes,
            liked: data.data.attributes.liked,
            image: data.data?.attributes?.image?.data?.attributes?.url
        }

        return adaptedPost
    },

    getUserPosts: async (userId) => {
        const { data } = await Axios.get(`/api/posts/user/${userId}`)

        const adaptedPosts = useAllPostsAdapter(data)

        return adaptedPosts
    },

    create: async (newPostData) => await Axios.post('/api/posts', newPostData),

    delete: async (id) => await Axios.delete(`/api/posts/${id}`)
}

export default PostsService