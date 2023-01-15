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
    }
}));
