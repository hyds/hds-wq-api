hds-wq-api
==========

WQ parameter mapping service

1. Upload Variable table
2. Match against old table
3. Match against other companies
4. Import WQ data against a company
5. Export against other company

## Design notes

### MongoDB Embedded model

``` javascript
	var User = new Schema({
	    company: {type:String, es_indexed:true}, 
	    formercompany: String, 
	    varnum: {
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
	    	},
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
	    datemod: Date
	})

```
### MongoDB Normalized model

``` javascript
	var variable = new Schema({
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

    var wqvar = new Schema({
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
	    usermod: String
	});

	var company = new Schema({
		_id: <ObjectId3>,
		companyName: String ,
		staff: {
			firstname:String,
			surname:String,
			email:String,
			password: String
		}
	});	

	var samples = new Schema({
		_id: <ObjectId4>,
		companyName: String ,
		project: String ,
		program: String ,
		sampnum: String ,
		...
		
	});

```
