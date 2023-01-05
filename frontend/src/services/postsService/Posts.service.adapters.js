export const allPostsAdapter = data => {
    const adaptedPosts = data.data.map(post => ({
        id: post.id,
        title: post.attributes.title,
        body: post.attributes.body,
        author: post.attributes.author.data.attributes.username,
        authorId: post.attributes.author.data.id,
        authorAvatar: post.attributes.author.data.attributes?.avatar?.data?.attributes?.url,
        image: post.attributes?.image?.data?.attributes?.url || null
    }))


    return adaptedPosts
}