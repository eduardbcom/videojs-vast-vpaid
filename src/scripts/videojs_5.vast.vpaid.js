module.exports = videojs => {
    require('./plugin/components/ads-label_5')(videojs);
    require('./plugin/components/black-poster_5')(videojs);
    require('../styles/videojs.vast.vpaid.scss');

    const videoJsVAST = require('./plugin/videojs.vast.vpaid');

    videojs.plugin('vastClient', videoJsVAST);
};