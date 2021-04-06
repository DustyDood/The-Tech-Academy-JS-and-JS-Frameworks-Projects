
function CallWeatherAPI() {
    var xhr = new XMLHttpRequest;
    var zipCode = document.getElementById("zip").value;
    console.log(zipCode);

    xhr.open('GET',"https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode +",us&appid=2c7e8a5caba7e8d8ba4ac020ddfcdadb&units=imperial",true)
    xhr.responseType = "text";
    xhr.onload = function() {
        if(xhr.status === 200 ) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);

            document.getElementById("location").innerHTML = "City of " + result.name;
            document.getElementById("currentTemp").innerHTML = "Current temp: " + result.main.temp +"&deg";
            document.getElementById("weatherdesc").innerHTML = "Basic weather: " + result.weather[0].description;
            
            var sunriseTime = result.sys.sunrise;
            sunriseTimeObj = new Date(sunriseTime * 1000);

            srhours = sunriseTimeObj.getHours();
            srminutes = sunriseTimeObj.getMinutes();
            srseconds = sunriseTimeObj.getSeconds();
            
            srformattedTime = srhours.toString().padStart(2, '0') + ':' + 
                            srminutes.toString().padStart(2, '0') + ':' + 
                            srseconds.toString().padStart(2, '0');

            var sunsetTime = result.sys.sunset;
            sunsetTimeObj = new Date(sunsetTime * 1000);

            sshours = sunsetTimeObj.getHours();
            ssminutes = sunsetTimeObj.getMinutes();
            ssseconds = sunsetTimeObj.getSeconds();
            
            ssformattedTime = sshours.toString().padStart(2, '0') + ':' + 
                            ssminutes.toString().padStart(2, '0') + ':' + 
                            ssseconds.toString().padStart(2, '0');
            
            document.getElementById("sunrise").innerHTML = "Sunrise Time: " + srformattedTime;
            document.getElementById("sunset").innerHTML = "Sunset Time: " + ssformattedTime;
            
        }
        if(xhr.status === 404) {
            console.log("That's not a valid zip code. please try again.")
        }
    }

    xhr.send();




}