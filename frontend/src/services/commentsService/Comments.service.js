import Axios from "@/api/axios"

import { useCommentAdapter } from "@/services/commentsService/Comments.service.adapters"

const CommentsService = {
    create: async (newComment) => {
        const { data } = await Axios.post('api/comments', newComment)

        const adaptedComment = useCommentAdapter(data)

        return adaptedComment
    },

    delete: async (id) => {
        const { data } = await Axios.delete(`/api/comments/${id}`)

        const adaptedComment = useCommentAdapter(data)

        return adaptedComment
    },

    edit: async (id, commentToEdit) => {
        await Axios.put(`/api/comments/${id}`, commentToEdit)
    }
}

export default CommentsService