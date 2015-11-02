// We add some color to our logs...
var logger = require('./coloredLog.js'); // we can omit .js

logger.setOpt('MyAppName',true,false);

logger.loginfo('This is just info');
logger.logwarn('This is a warning');
logger.logerr('This is an ERROR');