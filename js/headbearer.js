$(function(){
	$('#1').load("/srcs/templates/gridmain.html");
	for (i=1;i<8;i++){
		$('#dyn'+i).load("/srcs/views/"+$('#dyn'+i).val());
	}
});


/*import('kickass.js').then(module => {
	alert(module.readfile("/srcs/planedata.yb"));
})*/