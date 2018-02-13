$(document).ready(function() {
 $("#weatherSubmit").click(function(e) {
	e.preventDefault();
	var value = $("#weatherInput").val();
        console.log(value);
var myurl= "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=6e8e2d567980efc1311ef170cdd3a36a";
	$.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {
		var results = "";
		console.log(json.name);
		results += '<h2>Weather in ' + json.name + "</h2>";
				console.log(results);
		for (var i=0; i<json.weather.length; i++) {
		    results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
		}
		results += '<h2>' + json.main.temp + " &deg;F</h2>"
		results += '<h3>' + json.wind.speed + " Wind speed </h3>"
		results += "<p>"
		for (var i=0; i<json.weather.length; i++) {
		    results += json.weather[i].description
		    if (i !== json.weather.length - 1)
			results += ", "
		}
		results += "</p>";
		$("#weatherResults").html(results);
	    }
	});

    });

 $("#stackSubmit").click(function(e) {
	e.preventDefault();
	var value = $("#stackInput").val();
       
var myurl= "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle=" + value;
	$.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {

		var results = "";
		
		for (var i=0; i<json.items.length; i++) {
			results+="<p><a href="+ json.items[i].link+">"+json.items[i].title +"</a></p>";
		}
				console.log(results);
		
		$("#stackResults").html(results);
	    }
	});

    });

});

