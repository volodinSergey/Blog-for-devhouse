import Axios from "@/api/axios"

const CommentsService = {
    leaveComment: async (newComment) => {
        const { data } = await Axios.post('api/comments', newComment)

        return data
    }
}

export default CommentsService