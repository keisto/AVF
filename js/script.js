/*
 Custom Script
 Tony Keiser
 AVF 1310
 Week 4
 */

var pictureSource;   // picture source
var destinationType; // sets the format of returned value

// Wait for PhoneGap to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
};

// Camera Script
var onPhotoDataSuccess = function(imageData) {
    var smallImage = document.getElementById('smallImage');
    smallImage.style.display = 'block';
    smallImage.src = "data:image/jpeg;base64," + imageData;
};

var onPhotoURISuccess = function(imageURI) {
    var largeImage = document.getElementById('largeImage');
    largeImage.style.display = 'block';
    largeImage.src = imageURI;
};

var takePhoto = function() {
    navigator.camera.getPicture(onPhotoDataSuccess, cameraError, { quality: 20, allowEdit: true });
};

var getPhoto = function(source) {
    navigator.camera.getPicture(onPhotoURISuccess, cameraError, { quality: 50,
                                destinationType: destinationType.FILE_URI,
                                sourceType: source });
};
var cameraError = function(message) {
    alert('Photo failed because: ' + message);
};

// Compass
var setDirection = function(){
	navigator.compass.getCurrentHeading(getDirection, compassError);
	getDirection();
}
var getDirection = function(heading) {
    var direction = "";
    var number = "";
    number = Math.round(heading.magneticHeading);
    console.log(number);
    if(number>=340 && number<=360 || number>=0 && number<=20){
        direction= "North";
        console.log(direction);
    }
    if(number>=21 && number<=74){
        direction= "North East";
        console.log(direction);
    }
    if(number>=75 && number<=110){
        direction= "East";
        console.log(direction);
    }
    if(number>=111 && number<=159){
        direction= "South East";
        console.log(direction);
    }
    if(number>=160 && number<=200){
        direction= "South";
        console.log(direction);
    }
    if(number>=201 && number<=249){
        direction= "South West";
        console.log(direction);
    }
    if(number>=250 && number<=290){
        direction= "West";
        console.log(direction);
    }
    if(number>=291 && number<=339){
        direction= "North West";
        console.log(direction);
    }
    
    alert(' Your current direction is: ' + direction);
}

var compassError = function(compassError) {
    alert('Compass Error: ' + compassError.code);
}

// Check Network
var checkNetwork = function() {
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
var setLocation = function(){
	navigator.geolocation.getCurrentPosition(getLocation, locationError);
    getLocation();
}

var getLocation = function(position) {
    
alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');

};

var locationError = function(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Browser CODE not working for browser close.
    

var browser = function() {
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

//change Name
var changeName = function(){
    tester();
    //Get location on name entry
    function tester(){
        navigator.geolocation.getCurrentPosition(locate, locationError);
        locate();
    };
        function locate(position){
			facing();		
			//Facing
			function facing(){
			    var direction = "";
			    var number = Math.round((Math.random() * 360) + 1);
			    console.log(number);
			    if(number>=340 && number<=360 || number>=0 && number<=20){
				    direction= "North";
				     console.log(direction);
			    }
			    	if(number>=21 && number<=74){
			    		direction= "North East";
			    		console.log(direction);
			    	}
			    		if(number>=75 && number<=110){
							direction= "East";
				    		console.log(direction);
			    		} 
			    			if(number>=111 && number<=159){
				    			direction= "South East";
								console.log(direction);
			    			}
			    				if(number>=160 && number<=200){
				    				direction= "South";
									console.log(direction);
			    				}
			    					if(number>=201 && number<=249){
				    					direction= "South West";
										console.log(direction);
			    					}
										if(number>=250 && number<=290){
											direction= "West";
											console.log(direction);
										} 
											if(number>=291 && number<=339){
												direction= "North West";
												console.log(direction);
											}
		 // end facing
	network();
	function network() {
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


     
            
            
     //change html 
            var name = $("#nameInput").val();
            $("#fname").html(" " + name + ", a you are currently here with <p class=outputs>" + status[networkStatus] + "</p> located at <p class=outputs>" + Math.round(position.coords.latitude) + "</p> latitude and <p class=outputs>" + Math.round(position.coords.longitude) + "</p> longitude, and faceing <p class=outputs>" + direction + "</p>.");
				};
			};
	  };
};

// INSTAGRAM Script
var getInsta = function(){
		//Check Connection 
		instaNetwork();
		function instaNetwork() {
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
	    
	    if(status[networkStatus] == status[Connection.NONE]){
		    alert("You need to be connected to the internet!");
	    } else {

			var tag= $("#instaInput").val();
			console.log(tag);
			var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=20477b496ece4c169dd1eb8e504c349d&amp;min_id=10";
			$.getJSON(url,instaFeed);
			document.getElementById("feeds").removeAttribute("class");
			document.getElementById("feeds").setAttribute("class", "results");
}
};
};


var instaFeed = function(feed){
	console.log('status');
	console.log(feed);
	
	$("#instaStatus").html("<h3>Instagram Search</h3>");
	
	$.each(feed.data, function(index, photo) {
           var instaPic = "<li class='data'><img class='instaData' src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><br><p>" + photo.user.full_name + ", (<em> " + photo.user.username + " </em>)</p></li>";
           $("#instaData").append(instaPic);
           });
};

var refeed = function(){
	console.log("reset");
	$("#instaData").html('');
	document.getElementById("feeds").setAttribute("class", "hide");
};


$("#insta").click(getInsta);
$("#instaInput").keyup(refeed);
$("#fname").focusout(changeName);
//// END INSTAGRAM SCRIPT

//Instagram Location search 


/* Failed to work
var locateInsta = function(){
	var lat = 20; //tester location (to be changed later)
	var lng = 100;  //tester location (to be changed later)
	console.log(lat, lng);
	var locateUrl = "https://api.instagram.com/v1/locations/search?lat=48.858844&lng=2.294351&?callback=?&amp;client_id=20477b496ece4c169dd1eb8e504c349d&amp;min_id=10";
	$.getJSON(locateUrl,locatedFeed);
	document.getElementById("feeds").removeAttribute("class");
	document.getElementById("feeds").setAttribute("class", "results");
};

var locatedFeed = function(localFeed){
	console.log('status');
	console.log(localFeed);
	
	$("#instaStatus").html("<h3>Instagram Near You Search</h3>");
	
	$.each(localFeed.data, function(index, photo) {
           var instaPic = "<li class='data'><img class='instaData' src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><br><p>" + photo.user.full_name + ", (<em> " + photo.user.username + " </em>)</p></li>";
           $("#instaData").append(instaPic);
           });
};

$("#instaLocate").click(locateInsta);
*/

//// ESPN Script
var loadSports = function(){
		//Check Connection 
		sportNetwork();
		function sportNetwork() {
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
	    
	    if(status[networkStatus] == status[Connection.NONE]){
		    alert("You need to be connected to the internet!");
	    } else {

			var url = "http://api.espn.com/v1/sports/football/nfl/teams/?apikey=bz82ctn83438v8ucyycz6567";
			$.getJSON(url,sportFeed);
			document.getElementById("feeds").removeAttribute("class");
			document.getElementById("feeds").setAttribute("class", "results");
		}
	};
};
		
var sportFeed = function(espn){
        console.log(espn.sports[0].leagues[0].teams);
        
        $("#sportStatus").html("<h3>NFL Teams</h3>");//Testing
        $.each(espn.sports[0].leagues[0].teams, function(key, value){
               var color = "#"+value.color;
               var list = "<li class='data' style='color:"+color+"' <p><strong>" + value.nickname + ",</strong> (<em> " + value.name + " </em>)</p></li>";
               $("#sportData").append(list);
})};
$("#sportLoad").click(loadSports);
//// END ESPN SCRIPT