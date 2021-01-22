// // different types of data stored in javascript.

// // string variables
// var a = "apple";
// var b = "2357";
// var c = "apl5";
// console.log(a);

// console.log("2357" + "1")//23571
// console.log(2357+1)//2358

// // number values
// var d = 45;
// var e =53287.7798;
// console.log(a);

// // boolean values
// var f = true;
// var g = false;
// console.log(f); 

// // undefined variables
// var h;
// console.log(h);

// // null variables
// var h =null;
// console.log(h);

// //diff data that can be stored in an array

// // array storing similar kind of data.
// //string values
// arr1 = ["a","b","c","d","e"];
// console.log(arr1);
// //number values
// arr2 =[1,2,3,4,5,6,7];
// console.log(arr2);
// console.log(arr2[3]);

// //array with multiple arrays inside
// arr3 = [["1d","2c"],[34,54],["a",true,false],["apple","mango"]];
// console.log(arr3[2]);
// console.log(arr3[3][0]);

// arr2.push("padmakshi");
// console.log(arr2);
// arr2.pop();
// console.log(arr2);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,40);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:40});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

//to drag the bird as the point is dragged with the mouse.
function mouseDragged(){

    if(gameState !== "launched" ){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }

   
}

//to release the bird from the sling.
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

// to attach the bird back to the sling.
function keyPressed(){
    //32 is the ASCII value for space.
    //ASCII- American Standard Code for Information Interchange 
    if(keyCode === 32){
     //slingshot.attach(bird.body);
  }

}
