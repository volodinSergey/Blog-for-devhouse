import PostsService from "@/services/postsService/Posts.service"
const state = {
    isLoading: false,
    posts: [],
    post: {},
    postLiked: false
}


const getters = {
    posts: state => state.posts,
    post: state => state.post,
    postLiked: state => state.postLiked
}



const mutations = {
    setIsLoading: (state, loadingPayload) => state.isLoading = loadingPayload,
    setPosts: (state, postsPayload) => state.posts = postsPayload,
    setPost: (state, postPayload) => state.post = postPayload,
    setPostLiked: (state, isLikedPayload) => state.postLiked = isLikedPayload,
    deletePost: (state, postIdToDeletePayload) => {
        state.posts = state.posts.filter(post => post.id !== postIdToDeletePayload)
    }

}

const actions = {
    async getAllPosts({ commit }) {
        const posts = await PostsService.getAll()

        commit('setPosts', posts)
    },

    async like({ commit }, { postId, likeStatus }) {
        const isLiked = await PostsService.like(postId, likeStatus)

        commit('setPostLiked', isLiked)
    }

    // async getPost({ commit }, postIdToShow) {
    //     const post = await PostsService.getOne(postIdToShow)
    //     console.log(post)
    //     commit('setPost', post)
    // },

    // async deletePost({ commit }, postIdToDelete) {
    //     await PostsService.delete(postIdToDelete)

    //     commit('deletePost', postIdToDelete)
    // }
}

export default {
    state,
    mutations,
    actions,
    getters
}