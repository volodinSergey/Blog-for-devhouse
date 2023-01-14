export const useCommentAdapter = (comment) => {
    const adaptedComment = {
        id: comment.id,
        body: comment.body,

        author: {
            id: comment.author.id,
            name: comment.author.username,
            avatar: comment.author.avatar?.url
        }
    }

    return adaptedComment
}

export const useCommentsAdapter = (data) => {
    const adaptedComments = data.map(comment => ({
        id: comment.id,
        body: comment.body,

        author: {
            id: comment.author.id,
            name: comment.author.username,
            avatar: comment.author.avatar?.url
        }
    }))

    return adaptedComments
}

