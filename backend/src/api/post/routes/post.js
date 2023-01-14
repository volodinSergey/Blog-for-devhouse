'use strict';

/**
 * post router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::post.post');




const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter('api::post.post');

const customRouter = (innerRouter, extraRoutes = []) => {
    let routes;
    return {
        get prefix() {
            return innerRouter.prefix;
        },
        get routes() {
            if (!routes) routes = innerRouter.routes.concat(extraRoutes);
            return routes;
        },
    };
};

const myExtraRoutes = [
    {
        method: 'GET',
        path: '/posts/user/:userId',
        handler: 'api::post.post.findUserPosts',
    }
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
