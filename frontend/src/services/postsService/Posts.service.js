import Axios from '@/api/axios'

const PostsService = {
    getAll: async () => {
        const { data } = await Axios.get('/api/posts?populate=*')

        const adaptedPosts = data.data.map(post => ({
            id: post.id,
            title: post.attributes.title,
            body: post.attributes.body,
            author: post.attributes.author.data.attributes.username,
            authorId: post.attributes.author.data.id,
            image: post.attributes?.image?.data?.attributes?.url || null
        }))

        console.log(adaptedPosts)
        return adaptedPosts
    },

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