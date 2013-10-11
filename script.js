/* 
Custom Script
Tony Keiser
AVF 1310
Week 2
*/
/*
document.addEventListener("deviceready", onDeviceReady, false);

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
$(function(){
	var tag = "design";
	var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=20477b496ece4c169dd1eb8e504c349d&amp;min_id=10";
	$.getJSON(url,instaFeed);
	});

var instaFeed = function(feed) {
	
	console.log(feed);
	
	$("#instaStatus").html("<h3>Current Feed</h3>");
	
	$.each(feed.data, function(index, photo) {
		var instaPic = "<li class='data'><img class='instaData' src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><br><p>" + photo.user.full_name + ", (<em> " + photo.user.username + " </em>)</p></li>";
		$("#instaData").append(instaPic);
	});
};



//Tried API's for twitter, tumbler, photobucket, stumbleupon, facebook. I really like how easy instagram's was. I will continue to work and figure an API to display, but for now I ran out of time. 

/*

$(function(){
	var urlT = /* "https://api.twitter.com/1.1/search?q=%23design&src=typd" */
	/* "http://api.photobucket.com/ping?format=xml&oauth_consumer_key=00000000&oauth_nonce=9fd7bbc4a79d9c593ae3fe80b7d79b53&oauth_signature=%2Fdkp7tjDlMuZjPxbfuuBYFnjvec%3D&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1205248683&oauth_version=1.0"; 
	$.getJSON(urlT,twitterFeed);	
});

var twitterFeed = function(feedT){
	console.log(feedT);
};
*/
