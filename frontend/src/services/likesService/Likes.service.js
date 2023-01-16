import Axios from "@/api/axios"

const LikesService = {
    checkExistingLike: async (postId) => {
        const { data: isLikeExists } = await Axios.get(`/api/likes/is-exists/${postId}`)

        return isLikeExists
    },

    getLikesCountByPostId: async (postId) => {
        const { data: likesCount } = await Axios.get(`api/likes/count/${postId}`)

        return likesCount
    },

    createLike: async (postId) => await Axios.post(`api/likes/${postId}`),

    deleteLike: async (postId) => await Axios.delete(`api/likes/delete/${postId}`)
}

export default LikesService