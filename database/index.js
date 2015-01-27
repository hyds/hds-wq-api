var mongoose = require('mongoose'),
	config = require('../config'),
	autoIncrement = require('mongoose-auto-increment'),
    dbObject;

/*

mongoose.connection.on('error',function(error){
  console.log(error);
});

dbObject.connection = mongoose.connect(config.mongooseConnection)

dbObject.Timesheet = require('./schemas/timesheet');
//dbObject.Application = require('./schemas/application');

module.exports = dbObject;
*/

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
  dbObject.Timesheet = require('./schemas/timesheet');
});


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