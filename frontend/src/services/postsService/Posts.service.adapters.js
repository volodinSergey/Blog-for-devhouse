export const allPostsAdapter = data => {
    const adaptedPosts = data.data.map(post => ({
        id: post.id,
        title: post.attributes.title,
        body: post.attributes.body,
        likes: post.attributes.likes || 0,
        liked: post.attributes.liked || false,
        image: post.attributes?.image?.data?.attributes?.url || null,
        author: post.attributes.author.data.attributes.username,
        authorId: post.attributes.author.data.id,
        authorAvatar: post.attributes.author.data.attributes?.avatar?.data?.attributes?.url,
    }))


    return adaptedPosts
}