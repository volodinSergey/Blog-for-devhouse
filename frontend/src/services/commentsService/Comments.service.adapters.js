export const useCommentsAdapter = (data) => {
    console.log(data)
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

export const useCommentAdapter = (data) => {

}