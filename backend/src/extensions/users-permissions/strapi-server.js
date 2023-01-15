'use strict'

module.exports = (plugin) => {
    plugin.controllers.user.find = async (ctx) => {
        const users = await strapi.entityService.findMany("plugin::users-permissions.user", {
            sort: { createdAt: 'DESC' },
        });

        return users
    };

    plugin.controllers.user.delete = async (ctx) => {
        const userIdToDelete = ctx.request.params.id

        const deletedUser = await strapi.entityService.delete("plugin::users-permissions.user", userIdToDelete, {
            populate: ['posts', 'comments']
        });

        deletedUser.posts.forEach(post => strapi.entityService.delete("api::post.post", post.id))

        deletedUser.comments.forEach(comment => strapi.entityService.delete("api::comment.comment", comment.id))

        return deletedUser

    };



    plugin.routes['content-api'].routes.push({
        method: 'GET',
        path: '/users',
        handler: 'user.find'
    },

        {
            method: 'DELETE',
            path: '/users/:id',
            handler: 'user.delete'
        }
    )

    return plugin;
};