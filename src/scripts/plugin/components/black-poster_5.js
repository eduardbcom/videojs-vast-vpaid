'use strict';

module.exports = videojs => {
    var baseVideoJsComponent = videojs.getComponent('Component');

    var BlackPoster = require('./black-poster')(baseVideoJsComponent);

    videojs.registerComponent('BlackPoster', videojs.extend(baseVideoJsComponent, BlackPoster));
};