var mongoose = require('mongoose');

var courseCodeSchema = new mongoose.Schema({
	courseName : {
		type : String,
		unique : true
	},
	courseCode : {
		type : String,
		unique : true
	}

});

module.exports = mongoose.model('coursecode',courseCodeSchema);