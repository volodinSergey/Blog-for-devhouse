'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
    async create(ctx) {
        const id = ctx.state.user.id

        const title = ctx.request.body.title
        const body = ctx.request.body.body
        const image = ctx.request.body.image


        const entry = await strapi.entityService.create('api::post.post', {
            data: {
                title: title,
                body: body,
                image: image,
                author: id
            },

            populate: {
                author: true,
                avatar: true,
                image: true,
                author: {
                    populate: {
                        avatar: true
                    }
                }
            },

        });

        return entry
    },

    async update(ctx) {
        const likeStatus = ctx.request.body.data.liked
        const postIdToUpdate = ctx.params.id

        const findedPostById = await strapi.entityService.findOne('api::post.post', postIdToUpdate, {

        });

        const postToUpdate = await strapi.entityService.update('api::post.post', postIdToUpdate, {
            data: {
                liked: likeStatus ? true : false,
                likes: likeStatus ? findedPostById.likes + 1 : findedPostById.likes - 1,
            },
        });


        return postToUpdate
    }
}));
