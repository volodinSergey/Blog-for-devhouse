'use strict';

/**
 * comment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment.comment', ({ strapi }) => ({
    async create(ctx) {
        const authorId = ctx.state.user.id
        const newCommentBody = ctx.request.body.data.body


        const newComment = await strapi.entityService.create('api::comment.comment', {
            data: {
                body: newCommentBody,
                author: authorId
            },

            populate: {
                author: {
                    fields: ['username'],

                    populate: {
                        avatar: {
                            fields: ['url']
                        }
                    }
                }
            },
        });



        return newComment
    }
}));
