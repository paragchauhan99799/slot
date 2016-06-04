var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var controllerProf = require('./controller/prof');
var controllercourseInfo = require('./controller/courseInfo');

var port=process.env.PORT || 3000
var router = express.Router();

var mongoURI = "mongodb://localhost:27017/slot";
var MongoDB = mongoose.connect(mongoURI).connection;
var http = require('http').Server(app);

MongoDB.on('error', function(err) { 
	console.log("MOngoDB is connected "+err.message); 
});

MongoDB.once('open', function() {
    console.log("MongoDB connection open ");
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname,'angularApp')));

app.use(bodyParser.json())

router.route('/prof')
	.post(controllerProf.postnewprof)
	.get(controllerProf.getallprof);

router.route('/courseinfo')
	.post(controllercourseInfo.postnewcourseinfo)
	.get(controllercourseInfo.getallcourseinfo);

router.route('/courseinfo/:courseinfo_id')
	.delete(controllercourseInfo.deletecourseinfo);

router.route('/courseinfo/courseCode/:courseCode')
	.get(controllercourseInfo.getspecificourseCode);

router.route('/courseinfo/profShortName/:profShortName')
	.get(controllercourseInfo.getspecificprofShortName);

router.get('/',function(req,res){
	res.json('Home page');
});

app.use('/home',router);
app.listen(port);

console.log('Port is running on '+" "+port);