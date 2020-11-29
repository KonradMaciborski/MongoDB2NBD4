  
printjson(
	db.people.aggregate(
	[{
		$match: {sex: "Female", nationality: "Poland"}}, {
		$unwind: "$credit"}, {
		$addFields: {curr: "$credit.currency", summ: {$toDouble: "$credit.balance"}}}, { 
		$addFields: {waluta: "$_id" }}, {$project: {_id: 0}}, {
		$group: {_id: "$curr", sumaSrodkow: {$sum: "$summ"}, SredniaSrodkow: {$avg: "$summ"}}}
	]).toArray())