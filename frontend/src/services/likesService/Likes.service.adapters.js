export const useGetLikesAdapter = (data) => {
    const likesCount = data.data.attributes.likes
    const likeStatus = data.data.attributes.liked

    return {
        likesCount,
        likeStatus
    }
}

export const useLikeStatusAdapter = (postWithUpdatedLike) => {
    const isLiked = postWithUpdatedLike.data.liked
    const likes = postWithUpdatedLike.data.likes


    return {
        isLiked,
        likes
    }
}