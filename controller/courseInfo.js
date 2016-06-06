var courseInfo = require('../models/courseInfo');

exports.postnewcourseinfo = function(req,res){
	var courseinfo = new courseInfo();	
	
	courseinfo.courseCode = req.body.courseCode;
	courseinfo.profShortName = req.body.profShortName;
	courseinfo.courseType = req.body.courseType;
	courseinfo.year = req.body.year;
	courseinfo.field = req.body.field;
	
	courseinfo.save(function(err){
		if(err)
			return res.json({message:'some thing wrong'});

		res.json({ message:'courseInfo added:'+ courseinfo});
	});
};

exports.getallcourseinfo = function(req,res){
	courseInfo.find(function(err,courseinfo) {
		if(err)
			return res.json({message:'some thing wrong'});
		
/*		var resp={ 
			results:courseinfo
		};*/

		res.json(courseinfo);
	/*	res.json(resp);*/
	});
};

exports.getspecificourseCode = function(req,res){
	courseInfo.find({courseCode : req.params.courseCode },function(err,courseinfo){
		if(err)
			res.send(err);

	/*	var resp={results:courseinfo};*/

			res.json(courseinfo);
	});
};

exports.getspecificprofShortName = function(req,res){
	courseInfo.find({profShortName : req.params.profShortName },function(err,courseinfo){
		if(err)
			res.send(err);

/*		var resp={results:courseinfo};*/

			res.json(courseinfo);
	});
};

exports.deletecourseinfo = function(req, res) {		
    courseInfo.findByIdAndRemove( req.params.courseinfo_id , function(err) {
   		if (err)
      		return res.json({message:'some thing wrong:'});

    	res.json({ message: 'courseinfo removed from the database!' });
  	});
};
