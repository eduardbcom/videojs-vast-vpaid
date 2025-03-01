'use strict';

module.exports = (videojs) => {
    var baseVideoJsComponent = videojs.getComponent('Component');

    var AdsLabel = require('./ads-label')(baseVideoJsComponent);

    videojs.registerComponent('AdsLabel', videojs.extend(baseVideoJsComponent, AdsLabel));
};