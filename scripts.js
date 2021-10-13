function setup(){
  createCanvas(400,400)

}

let boxes = [
  {
      color: "blue",
      x: 0,
      y: 0,
      width: 40,
      height: 40,
      stroke: 1,
      hover: false,
      hoverColor: "red"
  },
  {
      color: "red",
      x: 200,
      y: 260,
      width: 50,
      height: 50,
      stroke: 1,
      hover: false,
      hoverColor: "blue"
  },
  {
    color: "yellow",
    x: 350,
    y: 0,
    width: 50,
    height: 50,
    stroke: 1,
    hover: false,
    hoverColor: "pink"
},
{
  color: "white",
  x: 0,
  y: 40,
  width: 40,
  height: 160,
  stroke: 1,
  hover: false,
  hoverColor: "yellow"
},
{
  color: "white",
  x: 300,
  y: 0,
  width: 50,
  height: 130,
  stroke: 1,
  hover: false,
  hoverColor: "green"
},
{
  color: "white",
  x: 60,
  y: 250,
  width: 340,
  height: 10,
  stroke: 1,
  hover: false,
  hoverColor: "black"
},
{
  color: "white",
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  stroke: 1,
  hover: false,
  hoverColor: "black"
},
{
  color: "white",
  x: 200,
  y: 310,
  width: 130,
  height: 90,
  stroke: 1,
  hover: false,
  hoverColor: "skyblue"
},
{
  color: "skyblue",
  x: 200,
  y: 160,
  width: 200,
  height: 90,
  stroke: 1,
  hover: false,
  hoverColor: "orange"
},
{
  color: "yellow",
  x: 0,
  y: 200,
  width: 60,
  height: 60,
  stroke: 1,
  hover: false,
  hoverColor: "gray"
},
{
  color: "yellow",
  x: 40,
  y: 0,
  width: 260,
  height: 50,
  stroke: 1,
  hover: false,
  hoverColor: "white"
},
{
  color: "white",
  x: 120,
  y: 300,
  width: 80,
  height: 60,
  stroke: 1,
  hover: false,
  hoverColor: "pink"
},
{
  color: "red",
  x: 330,
  y: 330,
  width: 70,
  height: 70,
  stroke: 1,
  hover: false,
  hoverColor: "purple"
},

];

function checkBoxHover(box){
  if (mouseX > box.x && mouseX < box.width + box.x && mouseY > box.y && mouseY < box.height + box.y){
      box.hover = true
  }else{
      box.hover = false
  }
}
 function draw(){
background(255)
fill(255)
rect(0,40,40,160)
fill(255)
rect(0,260,30,140)
rect(40,260,160,40)
fill("red")
rect(30,260,10,100)
fill(220)
rect(30,360,170,40)
fill(255)
rect(150,100,250,60)
rect(40,100,60,100)
rect(100,100,50,50)
rect(100,150,50,100)
fill("red")
rect(60,200,40,20)
fill(255)
rect(350,50,20,50)
rect(370,50,30,50)
fill(255)
rect(330,250,70,80)



for(let box of boxes){
  strokeWeight(box.stroke);
  checkBoxHover(box)


  if (box.hover){
      fill(box.hoverColor)
  }else{
      fill(box.color)
  }

  rect(box.x,box.y,box.width,box.height);


}
}
  
  
    

    
//     if (x > 350){
//         speed = -1
// }else if( x < 1){
//     speed = 1
// }

// x = x + speed
// }