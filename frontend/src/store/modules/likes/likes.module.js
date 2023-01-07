import LikesService from "@/services/likesService/Likes.service"

const actions = {
    async like(_, { postId, likeStatus }) {
        await LikesService.like(postId, likeStatus)
    }
}

export default {
    actions
}