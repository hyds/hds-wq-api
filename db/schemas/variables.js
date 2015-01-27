module.exports = function(mongoose, autoIncrement){
    
    var variableSchema = mongoose.Schema({
	    _id : <ObjectId1>,
	    company: <ObjectId3>, 
	    formercompany: String, 
	    varnum: Number,
	    varnam: {type:String, es_indexed:true},
	    varunit: {type:String, es_indexed:true},
	    shortname: {type:String, es_indexed:true},
	    domain: String,
	    precision: Number,
	    decimals: Number,
	    reportform: String,
	    unitcode: String,
	    active: Boolean,
	    alphavar: String,
	    datemod: Date,
	    datecreate: Date,
	    usermod: String
	});

    variableSchema.plugin(autoIncrement.plugin, 'Variables');
    return mongoose.model('Variables', variableSchema);
};