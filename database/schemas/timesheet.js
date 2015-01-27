var mongoose = require('mongoose'),
  timesheetSchema = mongoose.Schema({
    projectName : String,
    userName : String,
    startTime : Date,
    endTime : Date,
    data : {},
    tags : [String]
  });

module.exports = mongoose.model('timsheet', timesheetSchema);

