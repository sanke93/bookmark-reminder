localStorage["preference"] = "gCal";

function clickHandler(e) {
  	var select = document.getElementById("preference");
	preference = select.children[select.selectedIndex].value;
	localStorage["preference"] = preference;
	//
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
});