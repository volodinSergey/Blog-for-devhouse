'use strict';

/**
 * like router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter('api::like.like');

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
        path: '/likes/count/:postId',
        handler: 'api::like.like.getAllCount',
    }
];

module.exports = customRouter(defaultRouter, myExtraRoutes);