$(function(){
	reloadGrid("/srcs/templates/gridmain.html",7);
});

function reloadGrid(gridname, dynelemcount){
	$('#1').load(gridname);
		for (i=1;i<(dynelemcount+1);i++){
			element = $('#dyn'+i);
			element.load("/srcs/views/"+element.attr("filename"));
		}
}

/*import('kickass.js').then(module => {
	alert(module.readfile("/srcs/planedata.yb"));
})*/