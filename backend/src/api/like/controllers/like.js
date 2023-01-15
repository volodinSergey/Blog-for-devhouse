'use strict';

/**
 * like controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::like.like', ({ strapi }) => ({
    async getAllCount(ctx) {
        const postIdToGetItsLikes = ctx.params.postId

        const likesCount = await strapi.entityService.count("api::like.like", {
            filters: {
                post: {
                    id: postIdToGetItsLikes
                }
            }
        })


        return likesCount
    },

    async createLike(ctx) {
        const userId = ctx.state.user.id
        const postId = ctx.params.postId

        const like = await strapi.entityService.create('api::like.like', {
            data: {
                user: userId,
                post: postId
            },
        });

        return like
    },

    async deleteLike(ctx) {
        const userId = ctx.state.user.id
        const postId = ctx.params.postId

        const findedLikeToDelete = await strapi.entityService.findMany('api::like.like', {
            filters: {
                post: {
                    id: postId
                },

                user: {
                    id: userId
                }
            }
        })

        const likeIdToDelete = findedLikeToDelete[0].id

        const deletedLike = await strapi.entityService.delete("api::like.like", likeIdToDelete)

        return deletedLike
    },

    async isLikeExists(ctx) {
        const userId = ctx.state.user.id
        const postId = ctx.params.postId

        const findedLike = await strapi.entityService.findMany('api::like.like', {
            filters: {
                post: {
                    id: postId
                },

                user: {
                    id: userId
                }
            }
        })

        return !!findedLike.length
    }
}));
