require('dotenv').config();

/*

<!-- API Url =     https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=4a370480ac4cb41b90b3d794286a129f&units=metric -->
*/

var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var searchbar =document.querySelector(".search input");
var searchbutton =document.querySelector(".search button");
var weathericon = document.querySelector(".weather-icon");

async function WeatherAPP(city){
   try{
    var fmethod = await fetch(apiUrl + city +`&appid=${process.env.KEY}`) ;
    console.log(fmethod);
    var fData = await fmethod.json() ;

    console.log(fData);
     console.log("hello")

    if(fmethod.status == 404){
      document.querySelector(".error").style.display = "block";
    }else{
      document.querySelector(".error").style.display = "none";
      
      document.querySelector(".city").innerHTML =fData.name;
      document.querySelector(".temp").innerHTML =Math.round(fData.main.temp)+"°C";
      document.querySelector(".humidity").innerHTML =fData.main.humidity+"%";
      document.querySelector(".wind").innerHTML = fData.wind.speed +"Km/h";

      if(fData.weather[0].main == "Clear"){
          weathericon.src= "asserts/clear.png";
      }
      else if(fData.weather[0].main == "Clouds"){
          weathericon.src = "asserts/clouds.png";
      }
      else if(fData.weather[0].main == "Drizzle"){
         weathericon.src = "asserts/drizzle.png";
     }
     else if(fData.weather[0].main == "Mist"){
      weathericon.src = "asserts/mist.png";
     }
     else if(fData.weather[0].main == "Rain"){
      weathericon.src = "asserts/rain.png";
     }
     else if(fData.weather[0].main == "Snow"){
      weathericon.src = "asserts/snow.png";
     }
}
   

   }
   catch(error){
       console.log(error)
       console.log("hello")
   }
   
}


searchbutton.addEventListener('click',()=>{

WeatherAPP(searchbar.value)
     
})