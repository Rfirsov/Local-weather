$(document).ready(function(){
  var lat;
  var long;
  
  $.getJSON("http://ip-api.com/json", function(data2){
    lat = data2.lat;
    long = data2.lon;
    
  var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=74448bd35144c1d5078faf2d21153492';
    console.log(api)
//JSON call for openweather API
 $.getJSON(api, function(data){
   var fTemp;
    var cTemp;
    var kTemp;
   var tempSwap=true;
   var weatherType = data.weather[0].description;
   kTemp = data.main.temp;
   var windSpeed = data.wind.speed;
   var city = data.name;
    fTemp = (kTemp*(9/5)-459.67).toFixed(2);
   cTemp = (kTemp-273.15).toFixed(2);
   
  console.log(city);
  $("#city").html(city);
  $("#weatherType").html(weatherType);
   $("#fTemp").html(fTemp);
   $("#fTemp").click(function(){
     
     if(tempSwap===false) {
       $("#fTemp").html(fTemp + " &#8457;");
       tempSwap=true;
       } else {
       $("#fTemp").html(cTemp + " &#8451;");
         tempSwap=false;
       }
   });
    $("#windSpeed").html(windSpeed + " kph");
   
}); 
});

});