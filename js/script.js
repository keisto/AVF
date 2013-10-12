/* 
Custom Script
Tony Keiser
AVF 1310
Week 2
*/

window.addEventListener("DOMContentLoaded", function(){
/*
function onDeviceReady() {
	$("#nav-camera").on("click", cameraFn);
	$("#nav-instagram").on("click", instagramFn);
	$("#nav-compass").on("click", compassFn);
	//etc...	
}; // phonegap deviceready
var cameraFn = function() {
	//load camera immediately? load buttons first?	
}; // end cameraFn
var instagramFn = function() {
	//check for connection? load data?	
};// end instagramFn
var compassFn = function() {
	//do something	
};// end compassFn
*/


//instagram script


function getInsta(){
	var tag= $("#instaInput").val();
	console.log(tag);
	var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=20477b496ece4c169dd1eb8e504c349d&amp;min_id=10";
	$.getJSON(url,instaFeed);
	document.getElementById("feeds").removeAttribute("class");
	document.getElementById("feeds").setAttribute("class", "body");
	};



function instaFeed(feed){
	console.log('status');
	console.log(feed);
	
	$("#instaStatus").html("<h3>Instagram Search</h3>");
	
	$.each(feed.data, function(index, photo) {
		var instaPic = "<li class='data'><img class='instaData' src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><br><p>" + photo.user.full_name + ", (<em> " + photo.user.username + " </em>)</p></li>";
		$("#instaData").append(instaPic);
	});
};

function refeed(){
	console.log("reset");
	$("#instaData").html('');
	document.getElementById("feeds").setAttribute("class", "hide");
};

function changeName(){
	var name = $("#nameInput").val();
	$("#fname").html(name);
}

$("#insta").click(getInsta);
$("#instaInput").keyup(refeed);
$("#fname").focusout(changeName);
//// END INSTAGRAM SCRIPT


//// ESPN Script 

/*
	var tag= $("#sportInput").val();
	console.log(tag);
*/
function loadSports(){
	
	var url = "http://api.espn.com/v1/sports/football/nfl/teams/?apikey=bz82ctn83438v8ucyycz6567";
	$.getJSON(url,sportFeed);
	document.getElementById("feeds").removeAttribute("class");
	document.getElementById("feeds").setAttribute("class", "body");
	
	
	function sportFeed(espn){
	console.log(espn.sports[0].leagues[0].teams);
	
	$("#sportStatus").html("<h3>NFL Teams</h3>");
	$.each(espn.sports[0].leagues[0].teams, function(key, value){
		var color = "#"+value.color;
		var list = "<li class='data' style='color:"+color+"' <p><strong>" + value.nickname + ",</strong> (<em> " + value.name + " </em>)</p></li>";
		$("#sportData").append(list);
	})};
};
$("#sportLoad").click(loadSports);
//// END ESPN SCRIPT
});

