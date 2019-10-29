$(function(){
	reLoadGrid("/srcs/templates/gridmain.html",5);
});

function reLoadGrid(gridname, dynelemcount){//загрузить или перезагрузить пустую сетку, по окончанию вставить в сетку дочерние файлы
	$('#1').load(gridname, null, function(response, status, xhr){
		console.log("grid load status: "+status);
		processGrid(dynelemcount);
	});
}

function processGrid(dynelemcount){//вставить в сетку дочерние файлы
	for (i=1;i<(dynelemcount+1);i++){
		element = $('#dyn'+i);
		element.load("/srcs/views/"+element.attr("filename"), null, function(response, status, xhr){
		console.log("elements load status: "+status);
		});
	}
}

/*
function loadGrid(gridname){//загрузить или перезагрузить пустую сетку
	$('#1').load(gridname);
}

import('kickass.js').then(module => {
	alert(module.readfile("/srcs/planedata.yb"));
})*/