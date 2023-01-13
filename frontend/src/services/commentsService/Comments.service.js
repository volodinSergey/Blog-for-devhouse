import Axios from "@/api/axios"

import { useCommentAdapter } from "@/services/commentsService/Comments.service.adapters"

const CommentsService = {
    createComment: async (newComment) => {
        const { data } = await Axios.post('api/comments', newComment)

        const adaptedComment = useCommentAdapter(data)

        return adaptedComment
    }
}

export default CommentsService