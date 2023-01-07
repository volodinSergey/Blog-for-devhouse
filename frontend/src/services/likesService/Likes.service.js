import Axios from "@/api/axios"

import { useGetLikesAdapter, useLikeStatusAdapter } from "@/services/likesService/Likes.service.adapters"

const LikesService = {
    getLikes: async (id) => {
        const { data } = await Axios.get(`/api/posts/${id}?populate=*`)

        const { likesCount, likeStatus } = useGetLikesAdapter(data)

        return {
            likesCount,
            likeStatus
        }
    },

    like: async (id, likeStatus) => {
        const dataToPut = {
            data: {
                liked: likeStatus
            }
        }

        const postWithUpdatedLike = await Axios.put(`/api/posts/${id}`, dataToPut)

        const { isLiked, likes } = useLikeStatusAdapter(postWithUpdatedLike)

        return { isLiked, likes }
    }
}

export default LikesService