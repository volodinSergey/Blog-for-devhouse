import Axios from "@/api/axios"

const LikesService = {
    getLikes: async (id) => {
        const { data } = await Axios.get(`/api/posts/${id}?populate=*`)

        const likesCount = data.data.attributes.likes
        const likeStatus = data.data.attributes.liked

        return {
            likesCount,
            likeStatus
        }
    },

    like: async (id, likeStatus) => {
        const data = {
            data: {
                liked: likeStatus
            }
        }

        const postWithUpdatedLike = await Axios.put(`/api/posts/${id}`, data)

        const isLiked = postWithUpdatedLike.data.liked
        const likes = postWithUpdatedLike.data.likes

        return { isLiked, likes }
    }
}

export default LikesService