$(function(){
	loadGrid("/srcs/templates/gridmain.html");
	processGrid(7);
});

function loadGrid(gridname){
	$('#1').load(gridname);
}
function processGrid(dynelemcount){
	for (i=1;i<(dynelemcount+1);i++){
		element = $('#dyn'+i);
		element.load("/srcs/views/"+element.attr("filename"));
	}
}

/*import('kickass.js').then(module => {
	alert(module.readfile("/srcs/planedata.yb"));
})*/