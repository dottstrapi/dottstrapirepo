'use strict';

/**
 * yellow-block service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yellow-block.yellow-block');
