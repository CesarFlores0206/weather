function temperature(temp){
  
  
  
  for(var i = 0; i<1; i++){
  var size = temp;
  var speed = temp*0.0001;
  var correlation = 1000;
  var time = (frameCount * speed);
  var up = map(noise(time),0,1,0,height);
  var turn = map(noise(time),0,1,0,height);

translate(width/2,height/2);
  push();
  rotate(turn);
  
  
  fill(207,224,252);
  //use 0,0 if the location is already defined in translate
  noStroke();
  ellipse(0,0,size,size+5);
  fill(207,224,252);
  //quad(38, 31, 86, 20, 69, 63, 30, 76);
 
  ellipse(0,0,20,140);
  ellipse(0,0,140,20);
  pop();
    
  
  }
  
}