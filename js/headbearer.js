$(function(){
	reLoadGrid("/srcs/templates/gridmain.html",5);
});

function reLoadGrid(gridname, dynelemcount){//загрузить или перезагрузить пустую сетку, по окончанию вставить в сетку дочерние файлы
	$('#1').load(gridname, null, function(response, status, xhr){
		if (status == "error") console.log("grid load status error: "+xhr.status + " " + xhr.statusText);
		processGrid(dynelemcount);
	});
}

function processGrid(dynelemcount){//вставить в сетку дочерние файлы
	for (i=1;i<(dynelemcount+1);i++){
		element = $('#dyn'+i);
		element.load("/srcs/views/"+element.attr("filename"), null, function(response, status, xhr){
		if (status == "error") console.log("grid load status error: "+xhr.status + " " + xhr.statusText);
		});
	}
}

function loadWidget(filename, number){//Загрузить виджет в позицию на сетке
	element = $('#dyn'+number);
	element.load(filename, null, function(response, status, xhr){
	if (status == "error") console.log("grid load status error: "+xhr.status + " " + xhr.statusText);
	else return;
	});
}

function centerLoadText(){
	var request = new XMLHttpRequest();
	request.open('GET', '/srcs/planedata.yb', false);
	request.onreadystatechange = function(){
		if (request.readyState === 4) {
		var textfileContent = JSON.parse(request.responseText);
		console.log(textfileContent);
			loadWidget("/srcs/views/textFromFile.html", 3);
			$("#textSpan").text(textfileContent[0]);
    	}
	}
	request.send(null);
}

/*
function loadGrid(gridname){//загрузить или перезагрузить пустую сетку
	$('#1').load(gridname);
}

import('kickass.js').then(module => {
	alert(module.readfile("/srcs/planedata.yb"));
})*/