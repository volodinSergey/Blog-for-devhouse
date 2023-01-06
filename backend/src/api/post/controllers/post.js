'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
    async update(ctx) {
        const likeStatus = ctx.request.body.data.liked
        const postIdToUpdate = ctx.params.id

        const findedPostById = await strapi.entityService.findOne('api::post.post', postIdToUpdate, {

        });

        const postToUpdate = await strapi.entityService.update('api::post.post', postIdToUpdate, {
            data: {
                likes: likeStatus ? findedPostById.likes + 1 : findedPostById.likes - 1,
            },
        });


        return postToUpdate
    }
}));
