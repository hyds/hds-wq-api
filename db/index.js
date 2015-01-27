var config = require('../config'),
    logger = require('../logger'),
    mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    dbObject;

mongoose.connect(config.mongooseConnection);
mongoose.connection.on('error', logger.error);
mongoose.connection.once('open', function(){
    logger.info('Connected to Mongo successfully');
});

autoIncrement.initialize(mongoose.connection);

dbObject = require('./models')(mongoose, autoIncrement);
dbObject.Types = mongoose.Types;
dbObject.mongo = mongoose.mongo;

// // http://stackoverflow.com/a/11989159
// dbObject.isValidObjectId = function(string){
//     return (/^[0-9a-fA-F]{24}$/).test(string);
// };

module.exports = dbObject;



