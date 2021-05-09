'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async matchUser(ctx) {
        const initiatorId = ctx.params.id;
        const currentUser = ctx.state.user;
        const userPoints = currentUser.questionPoints

        console.log(ctx.state)

        const users = await strapi.query('user', 'users-permissions').find({ _limit: 5, _sort: 'createdAt:asc' })

    },
};
