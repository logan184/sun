const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg2;
var bg = "sunrise1.png" ;
var morning,night;

function preload() {
    backgroundImg = loadImage("sunrise1.png");
getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

   background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
    var responseJson = await response.json();
    console.log(responseJson);
    var myDate = responseJson.datetime;
    console.log(myDate);
    var time = myDate.slice(11,13);
    console.log(time);
    if(time>= 04   &&   time<= 06){
       bg = "sunrise1.png";
       
    }
    else  if(time>= 07   &&   time<=08 ){
        bg = "sunrise2.png";
        
    }
    else  if(time>= 08   &&   time<=09 ){
        bg = "sunrise3.png";
       
    }
    else  if(time>= 10   &&   time<= 12 ){
        bg = "sunrise4.png";
       
    }
    else  if(time>= 12   &&   time<=14 ){
        bg = "sunrise5.png";
       
    }
    else  if(time>= 14   &&   time<=16 ){
        bg = "sunrise6.png";
       
    }
    else  if(time>= 16   &&   time<=18 ){
        bg = "sunset8.png";
       
    }
    else  if(time>= 18   &&   time<=19 ){
        bg = "sunset9.png";
       
    }
    else  if(time>= 19   &&   time<=20 ){
        bg = "sunset10.png";
       
    }else  if(time>= 20   &&   time<=22 ){
        bg = "sunset11.png";
       
    }else  if(time>= 22   &&   time<=24 ){
        bg = "sunset12.png";
       
    }
    backgroundImg = loadImage(bg);
    
}
