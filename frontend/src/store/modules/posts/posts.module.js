import PostsService from "@/services/postsService/Posts.service"

const state = {
    isLoading: false,
    posts: [],
    post: {},
}


const getters = {
    posts: state => state.posts,
    post: state => state.post,
    postLiked: state => state.postLiked,
}



const mutations = {
    setIsLoading: (state, loadingPayload) => state.isLoading = loadingPayload,
    setPosts: (state, postsPayload) => state.posts = postsPayload,
    setPost: (state, postPayload) => state.post = postPayload,
    deletePost: (state, postIdToDeletePayload) => {
        state.posts = state.posts.filter(post => post.id !== postIdToDeletePayload)
    }

}

const actions = {
    async getAllPosts({ commit }) {
        const posts = await PostsService.getAll()
        const sortedPosts = posts.sort((prev, next) => next.id - prev.id)

        commit('setPosts', sortedPosts)
    },

    async deletePost({ commit }, postIdToDelete) {
        await PostsService.delete(postIdToDelete)

        commit('deletePost', postIdToDelete)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}