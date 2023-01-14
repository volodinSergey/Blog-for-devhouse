'use strict';

/**
 * comment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment.comment', ({ strapi }) => ({
    async create(ctx) {
        const authorId = ctx.state.user.id
        const newCommentBody = ctx.request.body.data.body
        const postId = ctx.request.body.data.postId


        const newComment = await strapi.entityService.create('api::comment.comment', {
            data: {
                body: newCommentBody,
                author: authorId,
                post: postId
            },



            populate: {
                post: true,

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
    },

    async delete(ctx) {
        const commentIdToDelete = ctx.params.id

        console.log(commentIdToDelete)

        const deletedComment = await strapi.entityService.delete('api::comment.comment', commentIdToDelete, {
            populate: {
                post: true,

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

        return deletedComment
    }
}));
