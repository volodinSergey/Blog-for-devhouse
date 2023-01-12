import Axios from "@/api/axios"

// import { useCommentAdapter } from "@/services/commentsService/Comments.service.adapters"

const CommentsService = {
    leaveComment: async (newComment) => {
        const { data } = await Axios.post('api/comments', newComment)

        return data
    }
}

export default CommentsService