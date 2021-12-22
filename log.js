var winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(new winston.transports.Console, {timestamp: true});
winston.add(new winston.transports.File({filename: 'logfile.log'}));
module.exports = winston;