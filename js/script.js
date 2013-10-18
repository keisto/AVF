/*
 Custom Script
 Tony Keiser
 AVF 1310
 Week 2
 */


var pictureSource;   // picture source
var destinationType; // sets the format of returned value

// Wait for PhoneGap to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
   
}

// Camera Script
function onPhotoDataSuccess(imageData) {
    var smallImage = document.getElementById('smallImage');
    smallImage.style.display = 'block';
    smallImage.src = "data:image/jpeg;base64," + imageData;
}

function onPhotoURISuccess(imageURI) {
    var largeImage = document.getElementById('largeImage');
    largeImage.style.display = 'block';
    largeImage.src = imageURI;
}

function takePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, cameraError, { quality: 20, allowEdit: true });
}

function getPhoto(source) {
    navigator.camera.getPicture(onPhotoURISuccess, cameraError, { quality: 50,
                                destinationType: destinationType.FILE_URI,
                                sourceType: source });
}
function cameraError(message) {
    alert('Photo failed because: ' + message);
}

// Compass
function setDirection(){
	navigator.compass.getCurrentHeading(getDirection, compassError);
	getDirection();
}
function getDirection(heading) {
    
    alert('0 is North, 180 is South. Your current direction is: ' + heading.magneticHeading);
}

function compassError(compassError) {
    alert('Compass Error: ' + compassError.code);
}

// Check Network
function checkNetwork() {
    var networkStatus = navigator.connection.type;

    var status = {};
    status[Connection.UNKNOWN]  = 'a Unknown connection';
    status[Connection.ETHERNET] = 'a Ethernet connection';
    status[Connection.WIFI]     = 'a WiFi connection';
    status[Connection.CELL_2G]  = 'a Cell 2G connection';
    status[Connection.CELL_3G]  = 'a Cell 3G connection';
    status[Connection.CELL_4G]  = 'a Cell 4G connection';
    status[Connection.CELL]     = 'a Cell generic connection';
    status[Connection.NONE]     = 'ZERO connection';

    alert('You are currently connected with ' + status[networkStatus] + ".");
}

// Geograph (Location)
function setLocation(){
	navigator.geolocation.getCurrentPosition(getLocation, locationError);
	getLocation();
}

function getLocation(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};

function locationError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Browser CODE not working for browser close.
    

function browser() {
         var ref = window.open('http://fullsail.edu', '_blank', 'location=yes' );
		 ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
         ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
         ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
         ref.addEventListener('exit', function(event) { alert(event.type); });
		 // Browser Close  
		 	setTimeout(function() {ref.close();}, 5000);  
}

           


// Nav Events
$("#camera").click(takePhoto);
$("#compass").click(setDirection);
$("#network").click(checkNetwork);
$("#location").click(setLocation);
$("#browser").click(browser);

// INSTAGRAM Script
function getInsta(){
	var tag= $("#instaInput").val();
	console.log(tag);
	var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=20477b496ece4c169dd1eb8e504c349d&amp;min_id=10";
	$.getJSON(url,instaFeed);
	document.getElementById("feeds").removeAttribute("class");
	document.getElementById("feeds").setAttribute("class", "results");
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
function loadSports(){
	
	var url = "http://api.espn.com/v1/sports/football/nfl/teams/?apikey=bz82ctn83438v8ucyycz6567";
	$.getJSON(url,sportFeed);
	document.getElementById("feeds").removeAttribute("class");
	document.getElementById("feeds").setAttribute("class", "results");
	
	
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


