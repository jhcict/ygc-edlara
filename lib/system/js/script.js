

$("#test").click(function(){
	var script = $.parseJSON('{"questiondata":{"questions":{"1":"jkndfvkjndsvknjdsvkjn","2":"njknjnkjnkj","3":"jknjknjknkjnjnk","4":"gvghvghvgvghvghvghvhg","5":"yfytftyfrfdrdfrbfftyftu"},"question":{"1":{"checkboxdata":{"1":"jnkjnknjnknkj","2":"knjnkjnjkn","3":"jnjnkjnkjn","4":"njknkjnkj"},"answers":["2","0","0"]},"2":{"checkboxdata":{"1":"jnjknjknkjnjknjk","2":"jnjknkjnkjnknk","3":"kjnjknjknjknjknjk","4":"jknkjnjknkjnkjnk"},"answers":["2","4","0","0"]},"3":{"checkboxdata":{"1":"jnkjnjknjnhvghv","2":"gvhgvghvhgvhgv","3":"ghvghvghvghvgh","4":"hgvghvhgvhgvgh"},"answers":["2","0","0"]},"4":{"checkboxdata":{"1":"gvhgvhgvhgvghvghvghvh","2":"vghvhgvghvghvhgvhgv","3":"rdtrdtrdtdftrd","4":"frtftrdrt yfbyf"},"answers":["2","3","0","0"]},"5":{"checkboxdata":{"1":"fytfytdrydrydryuf","2":"tydfytfbtdruybdty","3":"ytfbftrdtrnftfbyfty","4":"fgdxewmdgewi"},"answers":["1","3","0","0"]}}}}');	
	$.each(script.questiondata.questions,function(i,tesd){
		alert(this);
		alert(i);
	});
});