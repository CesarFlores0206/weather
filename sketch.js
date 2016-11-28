var weatherData;
var locationX = 0;
var speedX = 1;
var mapImage;

function preload(){
mapImage = loadImage("assets/Equirectangular_projection_SW.jpg");  

}
function setup() {
  createCanvas(1280,720);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1251ee5d38be2d7249d86620df5617e9&units=imperial',gotData);
}
function gotData(data) {
  //println(data);
  weatherData = data;
}

function draw() {
  background(100);
  //background(mapImage);
  if (weatherData) {
    
    
    fill(0);
    text(weatherData.name,20,40);
    fill('blue');
    text(weatherData.main.temp,20,20);
    //text(weatherData.weather[0].main,20,60);
    fill(10);
    text(weatherData.clouds.all,20,60);
    text(weatherData.sys.country,120,40);
    text(weatherData.coord.lat,20,250);
    text(weatherData.coord.lon,200,250);
    fill(0);
    text(weatherData.wind.speed,20,80);
    cloud(weatherData.clouds.all);
    wind(weatherData.wind.speed);
    //wind(weatherData.wind.deg);
    temperature(weatherData.main.temp);
  }
}
function keyPressed(){
  
  switch(key){
    case "1":
      loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Phoenix,usa&appid=1251ee5d38be2d7249d86620df5617e9&units=imperial', gotData);
      break;
    case "2":
      var firstPart = "http://api.openweathermap.org/data/2.5/weather?"
      var lastPart = "&appid=1251ee5d38be2d7249d86620df5617e9&units=imperial"
      var lat =  map(mouseY,height,0,-90,90);
      var lon = map(mouseX, 0,width,180,180);
      var url = firstPart + "lat=" + lat + "&lon=" + lon + lastPart;
      //println(url);
      loadJSON(url, gotData);
      loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Toluca,mexico&appid=1251ee5d38be2d7249d86620df5617e9&units=imperial', gotData);
      break;
    case "3":
      loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Anchorage,usa&appid=1251ee5d38be2d7249d86620df5617e9&units=imperial', gotData);
      break;  
      
  }
}
