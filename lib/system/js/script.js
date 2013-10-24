var json = $.getJSON("http://api.laravel.dev/tutorials.json",function(json){
	console.log(json);
	$.each(json,function(i){
		var data = '<li><a href="#tutorial'+this.id+'"  data-transition="slidedown">'+this.name+'</a></li>';
		var content = '<div data-role="page" id="tutorial'+this.id+'"><div data-role="header"><h3>'+this.name+'</h3></div><div data-role="content">'+this.content+'</div><a href="#tutorials" data-role="button" data-theme="d" data-inline="true" data-mini="true" data-icon="back" data-transition="flow">Back</a></div>';
		$(data).appendTo('#tutorial_list').trigger('refresh');
		$(content).appendTo('#body').trigger('refresh');
	});
	return json;
});
var exam = $.getJSON("http://api.laravel.dev/exams.json",function(exam){
	console.log(exam);
	$.each(exam,function(i){
		var data = '<li><a id="exam_a_'+this.id+'" href="#exam_'+this.id+'_1"  data-transition="slidedown">'+this.title+'</a></li>';
		
			splitted = this.id;
		var examdata  = $.getJSON("http://api.laravel.dev/exam/"+this.id,function(examdata){
			var exampages = '';
			$.each(examdata.questiondata.questions,function(i,name){
				exampages += "<div data-role='page' id='exam_"+splitted+"_"+i+"'><div data-role='header'>Exam</div><div data-role='content'>";
				exampages += "<h4>"+name+"</h4>";
				
				exampages += '<fieldset data-role="controlgroup">';
				
				exampages += '<label class="checkboxdata" for="exam_'+splitted+'_'+i+'">';
				exampages += '<input type="checkbox" name="exam_'+splitted+'_'+i+'" id="exam_'+splitted+'_'+i+'_1" class="custom" data-mini="true">';
				exampages += examdata.questiondata.question[i].checkboxdata[1]+'</label>';
				
				exampages += '<label class="checkboxdata" for="exam_'+splitted+'_'+i+'">';
				exampages += '<input type="checkbox" name="exam_'+splitted+'_'+i+'" id="exam_'+splitted+'_'+i+'_2" class="custom" data-mini="true">';
				exampages += examdata.questiondata.question[i].checkboxdata[2]+'</label>';
				

				exampages += '<label class="checkboxdata" for="exam_'+splitted+'_'+i+'">';
				exampages += '<input type="checkbox" name="exam_'+splitted+'_'+i+'" id="exam_'+splitted+'_'+i+'_3" class="custom" data-mini="true">';
				exampages += examdata.questiondata.question[i].checkboxdata[3]+'</label>';
				
				exampages += '<label class="checkboxdata" for="exam_'+splitted+'_'+i+'">';
				exampages += '<input type="checkbox" name="exam_'+splitted+'_'+i+'" id="exam_'+splitted+'_'+i+'_4" class="custom" data-mini="true">';
				exampages += examdata.questiondata.question[i].checkboxdata[4]+'</label>';
				
				exampages += '</fieldset>';

				exampages += "</div>";
				var previousi = --i;
				var nexti = i+2;
				console.log(nexti);
				if(examdata.questiondata.question[previousi]){
					exampages +="<a data-role='button' data-mini='true' data-icon='arrow-l' data-iconpos='left' class='pull-left' href='#exam_"+splitted+"_"+previousi+"' data-transition='flow' >Previous</a> ";
				}
				if(examdata.questiondata.question[nexti]){
					exampages +="<a data-role='button' data-icon='arrow-r' data-iconpos='right' data-mini='true' class='pull-right' href='#exam_"+splitted+"_"+nexti+"' data-transition='flow' >Next</a> ";
				}
				else {
					exampages +="<a href='#index' data-transition='slideup' data-role='button' data-icon='check' data-iconpos='right' data-mini='true' class='pull-right' id='finish_"+splitted+"'>Finish Exam</a> "
				}
				exampages += "</div>";
			});
$(exampages).appendTo("#body").trigger("refresh");

$("input[type='checkbox']").trigger('refresh');
$("a").trigger('refresh');
$.each(examdata.questiondata.questions,function(i,name){
	$('exam_'+splitted+'_'+i+'_1').trigger('refresh');
	$('exam_'+splitted+'_'+i+'_2').trigger('refresh');
	$('exam_'+splitted+'_'+i+'_3').trigger('refresh');
	$('exam_'+splitted+'_'+i+'_4').trigger('refresh');
});
});
		$(data).appendTo('#exam_list').trigger('refresh');
});

});
$('a:regex(id,exam_a_[0-9]+)').click(function(){
	var splitarr = (this.id).split("_");
	var splitted = splitarr[splitarr.length - 1];
	var examdata  = $.getJSON("http://api.laravel.dev/exam/1",function(examdata){
		console.log(examdata);
	});
});
	$(":regex(id,finish_[0-9]+)").click(function(){

	});
	$("#loginform").submit(function(){
		$.mobile.changePage($('#index'), {transition:"fade"});
		$("#loginbtn").remove();
		$("#mainpagelist").trigger("refresh");
	});