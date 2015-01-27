module.exports = function(mongoose, autoIncrement){
    
    var companySchema = mongoose.Schema({
		_id: <ObjectId3>,
		companyName: String ,
		staff: {
			firstname:String,
			surname:String,
			email:String,
			password: String
		}
	});	
    companySchema.plugin(autoIncrement.plugin, 'company');
    return mongoose.model('company', companySchema);
};
