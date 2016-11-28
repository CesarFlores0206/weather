function cloud(cloudCover){
  
  for(var j = 0; j<cloudCover; j++){
  var speed = 0.00006;
  var correlation = 0.005;
  var time = (frameCount * speed)+(j*correlation);
  var up = map(noise(time),0,1,0,height/2);
  //offset the across variable in time
  time = time + 100;
  var across = map(noise(time),0,1,0,width);
  var spacer = 100;
  //push and pop usually means the use of translate and rotate
  //translate(width/2,height/2);
  push();
  translate(width/2,height/2);
  rotate(across);
  //vertex(across,up);
  noStroke();
  fill(123,138,153);
  //use 0,0 if the location is already defined in translate
  
  rect(110, 20, 65, 75, 30);
  pop();
    
  }
  
}