function wind(windSpeed,windDirection){
  

  for(var j = 0; j<4; j++){
  var speed = windSpeed*0.00006;
  var correlation = 0.010;
  var time = (frameCount * speed)+(j*correlation);
  var up = map(noise(time),0,1,0,height/2);
  //offset the across variable in time
  time = time + 100;
  var across = map(noise(time),0,1,0,width);
  var spacer = 10;
  //push and pop usually means the use of translate and rotate
  //translate(width/2,height/2);
  push();
  translate(width/2,height/2);
  rotate(across);
  //vertex(across,up);
  fill(62, 75, 96);
  //use 0,0 if the location is already defined in translate
  noStroke();
  quad(48, 41, 86, 30, 79, 73, 40, 86);
  pop();
    
  }
  
}