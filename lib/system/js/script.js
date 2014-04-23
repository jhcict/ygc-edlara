var json = $.getJSON("http://api.edlara.tk/tutorials.json", function (json) {
    console.log(json);
    $("#tutorialcount").html(json.total);
    $.each(json.data, function (i) {
        var data = '<li><a href="#tutorial' + this.id + '"  data-transition="slidedown">' + this.name + '</a></li>';
        var content = '<div data-role="page" id="tutorial' + this.id + '"><div data-role="header"><h3>' + this.name + '</h3></div><div data-role="content">' + this.content + '</div><a href="#tutorials_start" data-role="button" data-theme="d" data-inline="true" data-mini="true" data-icon="back" data-transition="flow">Back</a></div>';
        $(data).appendTo('#tutorial_list').trigger('refresh');
        $(content).appendTo('#body').trigger('refresh');
    });
    return json;
});
$(document).on("click",".trigger_quest",function(){
    
//    alert("Testing");
    var examid = $(this).next().val();
    var questid = $(this).next().next().val();
    console.log(questid);
});
$(document).on("click", '.tutorials_nextpage', function () {
    var page = $(this).next().val();
    page++;
    console.log(page);
    var json = $.getJSON("http://api.edlara.tk/tutorials.json?page=" + page, function (json) {
        console.log(json);
        if ($('#tutorials_' + page).length == 0) {
            var update = '<div data-role="page" id="tutorials_' + page + '"><div data-role="header"><h1>Tutorials</h1></div><!-- /header --><div data-role="content"><ul id="tutorial_list_' + page + '" data-role="listview" data-inset="true" data-theme="b" data-divider-theme="e" data-count-theme="b"></ul><a href="#index" data-role="button" data-theme="d" data-inline="true" data-mini="true" data-icon="back" data-transition="flow">Back</a>			<span id="wrap"><a class="tutorials_nextpage" href="#" data-role="button" data-theme="d" data-inline="true" data-mini="true" data-icon="forward" data-transition="flow">Next</a><input type="hidden" name="tutorial_page" id="tutorial_page" value="' + page + '" placeholder=""></span>	</div><!-- /content --></div>';
            $(update).appendTo('#body').trigger('refresh');
            $.each(json.data, function (i) {
                var data = '<li><a href="#tutorial' + this.id + '" data-theme="e" data-transition="slidedown">' + this.name + '</a></li>';

                var content = '<div data-role="page" id="tutorial' + this.id + '"><div data-role="header"><h3>' + this.name + '</h3></div><div data-role="content">' + this.content + '</div><a href="#tutorials_' + page + '" data-role="button" data-theme="d" data-inline="true" data-mini="true" data-icon="back" data-transition="flow">Back</a></div>';
                // 
                $(data).appendTo('#tutorial_list_' + page);
                $(content).appendTo('#body').trigger('refresh');
                return json;
            });
        }
        $.mobile.navigate('#tutorials_' + page);
        $("#body").trigger("refresh");
    });
});
// var json = $.getJSON("http://api.edlara.tk/tutorials.json",function(json){
// 	// json.total
// });
var exam = $.getJSON("http://api.edlara.tk/exams.json", function (exam) {
    console.log(exam);
    $("#examcount").html(exam.total);
    $.each(exam.data, function (i) {
        var data = '<li><a id="exam_a_' + this.id + '" href="#exam_' + this.id + '_1"  data-transition="slidedown">' + this.title + '</a></li>';

        splitted = this.id;
        var examdata = $.getJSON("http://api.edlara.tk/exam/" + this.id, function (examdata) {
            var exampages = '';
            console.log(examdata.questiondata);
            $.each(examdata.questiondata.questions, function (i, name) {
                exampages += "<div data-role='page' id='exam_" + splitted + "_" + i + "'><div data-role='header'>Exam</div><div data-role='content'>";
                exampages += "<h4>" + name + "</h4>";

                exampages += '<fieldset data-role="controlgroup">';

                exampages += '<label class="checkboxdata" for="exam_' + splitted + '_' + i + '">';
                exampages += '<input type="checkbox" name="exam_' + splitted + '_' + i + '" id="exam_' + splitted + '_' + i + '_1" class="custom" data-mini="true">';
                exampages += examdata.questiondata.question[i].checkboxdata[1] + '</label>';

                exampages += '<label class="checkboxdata" for="exam_' + splitted + '_' + i + '">';
                exampages += '<input type="checkbox" name="exam_' + splitted + '_' + i + '" id="exam_' + splitted + '_' + i + '_2" class="custom" data-mini="true">';
                exampages += examdata.questiondata.question[i].checkboxdata[2] + '</label>';


                exampages += '<label class="checkboxdata" for="exam_' + splitted + '_' + i + '">';
                exampages += '<input type="checkbox" name="exam_' + splitted + '_' + i + '" id="exam_' + splitted + '_' + i + '_3" class="custom" data-mini="true">';
                exampages += examdata.questiondata.question[i].checkboxdata[3] + '</label>';

                exampages += '<label class="checkboxdata" for="exam_' + splitted + '_' + i + '">';
                exampages += '<input type="checkbox" name="exam_' + splitted + '_' + i + '" id="exam_' + splitted + '_' + i + '_4" class="custom" data-mini="true">';
                exampages += examdata.questiondata.question[i].checkboxdata[4] + '</label>';

                exampages += '</fieldset>';

                exampages += "</div>";
                var previousi = --i;
                var nexti = i+2;
                console.log(nexti);
                if (examdata.questiondata.question[previousi]) {
                    exampages += "<a data-role='button' data-mini='true' data-icon='arrow-l' data-iconpos='left' class='pull-left' href='#exam_" + splitted + "_" + previousi + "' data-transition='flow' >Previous</a> ";
                }
                if (examdata.questiondata.question[nexti]) {
                    exampages += "<a data-role='button' data-icon='arrow-r' data-iconpos='right' data-mini='true' class='trigger_quest pull-right' href='#exam_" + splitted + "_" + nexti + "' data-transition='flow' >Next</a> <input type='hidden' id='exam' value='"+splitted+"'><input type='hidden' id='quest' value='"+i+"'>";
                } else {
                    exampages += "<a href='#index' data-transition='slideup' data-role='button' data-icon='check' data-iconpos='right' data-mini='true' class='pull-right trigger_quest' id='finish_" + splitted + "'>Finish Exam</a><input type='hidden' id='exam' value='"+splitted+"'><input type='hidden' id='quest' value='"+i+"'> "
                }
                exampages += "</div>";
            });
            $(exampages).appendTo("#body").trigger("refresh");

            $("input[type='checkbox']").trigger('refresh');
            $("a").trigger('refresh');
            $.each(examdata.questiondata.questions, function (i, name) {
                $('exam_' + splitted + '_' + i + '_1').trigger('refresh');
                $('exam_' + splitted + '_' + i + '_2').trigger('refresh');
                $('exam_' + splitted + '_' + i + '_3').trigger('refresh');
                $('exam_' + splitted + '_' + i + '_4').trigger('refresh');
            });
        });
        $(data).appendTo('#exam_list').trigger('refresh');
    });

});