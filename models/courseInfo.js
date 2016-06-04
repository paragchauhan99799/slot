var mongoose = require('mongoose');

var courseInfoSchema = new mongoose.Schema({
	courseCode : {
		type : String,
	},
	profShortName : {
		type : String,
	},
	courseType : {
		type : String,
	},
	year : {
		type : String,
	},
	field : {
		type : String,
	}
	
});

module.exports = mongoose.model('courseinfo',courseInfoSchema);