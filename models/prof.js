var mongoose = require('mongoose');

var profSchema = new mongoose.Schema({
	profName : {
		type : String,
		uinque : true
	},
	profShortName : {
		type : String,
		unique : true
	}

});

module.exports = mongoose.model('prof',profSchema);