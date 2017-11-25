var list;
window.onload = function() {
	list = document.getElementById('button1').getElementsByTagName("li");
	console.log(list);
}
function toggleButton(){
	for(var i=0;i<list.length;i++){
		if (list[i].style.display === "inline-block") {
        	list[i].style.display = "none";
   		} else {
        	list[i].style.display = "inline-block";
    	}
	}
}