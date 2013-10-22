var api_path_exam = "http://api.laravel.dev/exam";
var api_path_tutorials = "http://api.laravel.dev/tutorials.json";
// var tu = [{"id":1,"name":"What is Technology","description":"Explains about what is Technology.","alias":"","published":1,"subjectname":"","subjectid":53,"content":"<p>Technology (from <a href=\"http:\/\/en.wikipedia.org\/wiki\/Ancient_Greek\" title=\"Ancient Greek\">Greek<\/a> &tau;\u03ad&chi;&nu;&eta;, techne, &quot;art, skill, cunning of hand&quot;; and -&lambda;&omicron;&gamma;\u03af&alpha;, <a href=\"http:\/\/en.wiktionary.org\/wiki\/-logia\" title=\"wikt:-logia\">-logia<\/a><a href=\"http:\/\/en.wikipedia.org\/wiki\/Technology#cite_note-Liddell_1980-1\">[1]<\/a>) is the making, modification, usage, and knowledge of <a href=\"http:\/\/en.wikipedia.org\/wiki\/Tool\" title=\"Tool\">tools<\/a>, <a href=\"http:\/\/en.wikipedia.org\/wiki\/Machine\" title=\"Machine\">machines<\/a>, techniques, <a href=\"http:\/\/en.wikipedia.org\/wiki\/Craft\" title=\"Craft\">crafts<\/a>, <a href=\"http:\/\/en.wikipedia.org\/wiki\/System\" title=\"System\">systems<\/a>, and methods of organization, in order to solve a problem, improve a pre-existing solution to a problem, achieve a goal, handle an applied input\/output relation or perform a specific function. It can also refer to the collection of such tools, including machinery, modifications, arrangements and procedures. Technologies significantly affect human as well as other animal species&#39; ability to control and adapt to their natural environments. The term can either be applied generally or to specific areas: examples include construction technology, medical technology, and information technology.<\/p>\r\n","createdby":1,"exams":"a:1:{s:4:\"true\";b:0;}","created_at":"2013-10-13 07:25:49","updated_at":"2013-10-17 12:01:22","deleted_at":null},{"id":2,"name":"History of Technology","description":"Perfect Article about History of Technology","alias":"","published":1,"subjectname":"","subjectid":53,"content":"<p>See Presentation<\/p>\r\n","createdby":1,"exams":"a:1:{s:4:\"true\";b:0;}","created_at":"2013-10-13 07:57:52","updated_at":"2013-10-13 10:53:12","deleted_at":null},{"id":3,"name":"Testsdfs","description":"wafesfewifh","alias":"","published":1,"subjectname":"","subjectid":48,"content":"<p>sf nsekhfesjkhfs ef hash af wehfeks lshf fshdkfhsfvhlsdra<\/p>\r\n","createdby":1,"exams":null,"created_at":"2013-10-17 06:48:21","updated_at":"2013-10-17 07:00:02","deleted_at":null}];
$(document).ready(function(){
$.getJSON(api_path_tutorials,function(json){
	var tu = json;
	// return tu;
	alert(json);
	// console.log(tu);
	$.each(tu,function(i){
		var data = '<li><a href="#tutorial'+this.id+'"  data-transition="slidedown">'+this.name+'</a></li>';
		var content = '<div data-role="page" id="tutorial'+this.id+'"><div data-role="header"><h3>'+this.name+'</h3></div><div data-role="content">'+this.content+'</div><a href="#tutorials" data-role="button" data-theme="d" data-inline="true" data-mini="true" data-icon="back" data-transition="flow">Back</a></div>';
		$(data).appendTo('#tutorial_list').trigger('refresh');
		// $('#tutorial_list').listview('refresh');
		$(content).appendTo('#body').trigger('refresh');
	});
});
});
		// $('[data-role=listview]').listview('refresh');

var exam = [{"id":1,"title":"Sample Exam","subjectid":55,"createdby":1,"totalquestions":5,"created_at":"2013-10-18 14:52:28","updated_at":"2013-10-18 15:04:47","deleted_at":null}];
$.each(exam,function(i){
	var data = '<li><a id="exam_a_'+this.id+'" href="#exam_'+this.id+'_1"  data-transition="slidedown">'+this.title+'</a></li>';
	$(data).appendTo('#exam_list').trigger('refresh');
});
jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}
$('a:regex(id,exam_a_[0-9]+)').click(function(){
	var splitarr = (this.id).split("_");
	var splitted = splitarr[splitarr.length - 1];
	var examdata  = $.parseJSON('{"questiondata":{"questions":{"1":"Sample Question 1","2":"Sample Question 2","3":"Sample Question 3","4":"Sample Question 4","5":"Sample Question 5"},"question":{"1":{"checkboxdata":{"1":"Sample Answer 1","2":"Sample Answer 2","3":"Sample Answer 3","4":"Sample Answer 4"},"answers":["2","0","0"]},"2":{"checkboxdata":{"1":"Sample Answer 1","2":"Sample Answer 2","3":"Sample Answer 3","4":"Sample Answer 4"},"answers":["2","4","0","0"]},"3":{"checkboxdata":{"1":"Sample Answer 1","2":"Sample Answer 2","3":"Sample Answer 3","4":"Sample Answer 4"},"answers":["2","0","0"]},"4":{"checkboxdata":{"1":"Sample Answer 1","2":"Sample Answer 2","3":"Sample Answer 3","4":"Sample Answer 4"},"answers":["2","3","0","0"]},"5":{"checkboxdata":{"checkboxdata":{"1":"Sample Answer 1","2":"Sample Answer 2","3":"Sample Answer 3","4":"Sample Answer 4"},"answers":["1","3","0","0"]}}}}}');
	// console.log(examdata);
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
 	$("").trigger('refresh');
	$.each(examdata.questiondata.questions,function(i,name){
		$('exam_'+splitted+'_'+i+'_1').trigger('refresh');
		$('exam_'+splitted+'_'+i+'_2').trigger('refresh');
		$('exam_'+splitted+'_'+i+'_3').trigger('refresh');
		$('exam_'+splitted+'_'+i+'_4').trigger('refresh');
	});
	var content = "<div data-role='page' id='exam_page_";
});
$(":regex(id,finish_[0-9]+)").click(function(){

});
$("#loginform").submit(function(){
		$.mobile.changePage($('#index'), {transition:"fade"});
		$("#loginbtn").remove();
		$("#mainpagelist").trigger("refresh");
});