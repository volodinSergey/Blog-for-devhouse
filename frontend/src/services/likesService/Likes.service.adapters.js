export const useGetLikesAdapter = (data) => {
    const likesCount = data.likes
    const likeStatus = data.liked

    return {
        likesCount,
        likeStatus
    }
}

export const useLikeStatusAdapter = (data) => {
    const likeStatus = data.liked
    const likesCount = data.likes

    return {
        likeStatus,
        likesCount
    }
}