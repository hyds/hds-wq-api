module.exports = function(mongoose, autoIncrement){
    
    var wqvarSchema = mongoose.Schema({
		_id: <ObjectId2>,
		company: <ObjectId3>,
		variable_id: <ObjectId1>,
		variable: Number,
		subvar: Number,
		name: String,
		shortname: String,
		comment: String,
		maximum: Number,
		minimum: Number,
		accuracy: Number,
		electriccharge: String,
		molarequiv: Number,
		casref: String,
		measmeth: String,
		mapvar: Number,
		vartrace: String,
		datemod: Date,
	    datecreate: Date,
	)};

    wqvarSchema.plugin(autoIncrement.plugin, 'WQVar');
    return mongoose.model('WQVar', wqvarSchema);
};
