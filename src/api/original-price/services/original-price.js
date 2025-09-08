'use strict';

/**
 * original-price service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::original-price.original-price');
