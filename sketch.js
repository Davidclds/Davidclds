function setup(){
    createCanvas(400, 400);
    narjara = "orange"
    background('#1CD3EA')
  }
  
  function draw(){
    fill(narjara);
    if (mouseIsPressed){
      circle(mouseX, mouseY, 50)
    }
  }
  