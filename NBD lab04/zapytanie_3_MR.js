var map = function(){
	emit(this.job, this.job)
}

db.people.mapReduce(map, function(){}, {
		out: "MR3NBD"
	});


printjson(db.MR3NBD.find().toArray());