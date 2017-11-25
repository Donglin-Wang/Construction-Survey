var indash;
var dash;
window.onload = function() {
	indash = document.getElementById('dash').innerHTML;
};
function toProgress(){
	document.getElementById('dash').innerHTML = "<p> This is a beta version. The feature is not implemented yet</p>";
	document.getElementById('toProgress').classList.toggle('current');
	document.getElementById('toDash').classList.toggle('current');
}
function toDash(){
	document.getElementById('dash').innerHTML = indash;
	document.getElementById('toDash').classList.toggle('current');
	document.getElementById('toProgress').classList.toggle('current');
}