import Axios from '@/api/axios'

import { allPostsAdapter } from '@/services/postsService/Posts.service.adapters'

const PostsService = {
    getAll: async () => {
        const { data } = await Axios.get('/api/posts?populate[image]=*&populate[author][populate][0]=avatar')

        const adaptedPosts = allPostsAdapter(data)

        return adaptedPosts
    },

    like: async (id) => await Axios.put(`/api/posts/${id}`, {})


    // getOne: async (id) => {
    //     const { data } = await Axios.get(`/api/posts/${id}?populate=*`)

    //     const adaptedPost = {
    //         title: data.data.attributes.title,
    //         body: data.data.attributes.body,
    //         image: data.data?.attributes?.image?.data?.attributes?.url
    //     }

    //     return adaptedPost
    // },

    // create: async (newPostData) => await Axios.post('/api/posts', newPostData),

    // delete: async (id) => await Axios.delete(`/api/posts/${id}`)
}

export default PostsService