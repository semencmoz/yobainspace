function readfile(name){
	var rawfile = new XMLHttpRequest();
	fawfile.open("GET, name, false");
	rawfile.openreadystatechange = function(){
		if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
            }
        }
	}
    rawFile.send(null);
    return(allText);
}

function loadText(){
    
}