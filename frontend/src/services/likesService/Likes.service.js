import Axios from "@/api/axios"

import { useGetLikesAdapter, useLikeStatusAdapter } from "@/services/likesService/Likes.service.adapters"

const LikesService = {
    checkExistingLike: async (postId) => {
        const isLikeExists = await Axios.get(`/api/likes/is-exists/${postId}`)

        return isLikeExists
    },

    getLikesCountByPostId: async (postId) => {
        const { data: likesCount } = await Axios.get(`api/likes/count/${postId}`)

        return likesCount
    },

    createLike: async (postId) => {
        const response = await Axios.post(`api/likes/${postId}`)

        console.log(response)
    },


    deleteLike: async (postId) => {
        const response = await Axios.delete(`/likes/delete/${postId}`)

        console.log(response)
    }
}

export default LikesService