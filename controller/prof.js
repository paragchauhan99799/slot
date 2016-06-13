var Prof = require('../models/prof');

exports.postnewprof = function(req,res){
	var prof = new Prof();	
	
	prof.profName = req.body.profName;
	prof.profShortName = req.body.profShortName;
	
	prof.save(function(err){
		if(err)
			return res.json({message:'some thing wrong'});

		res.json({ message:'Prof added:'+ prof});
	});
};

exports.getallprof = function(req,res){
	Prof.find(function(err,prof) {
		if(err)
			return res.json({message:'some thing wrong'});
/*		
		var resp={ 
			results:prof
		};
		*/

		res.json(prof);
	});
};

exports.deleteprofinfo = function(req, res) {		
    Prof.findByIdAndRemove( req.params.prof_id , function(err) {
   		if (err)
      		return res.json({message:'some thing wrong:'});

    	res.json({ message: 'profinfo removed from the database!' });
  	});
};
