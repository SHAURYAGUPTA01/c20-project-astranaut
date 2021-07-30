   var astranout
   var astranout2;
    var issImg,iss;
    var moveImg;
    var brushImg;
    var bathImg;
    var drinkImg;
    var eatImg;
    var gymImg;
    var gym2Img;
    var sleepImg;
    var invisibleWallImg,invisibleWall;

    function preload(){
      issImg = loadImage("iss.png");
      brushImg = loadAnimation("brush.png");
      bathImg = loadAnimation("bath1.png","bath2.png");
      drinkImg = loadAnimation("drink1.png","drink2.png");
      eatImg = loadAnimation("eat1.png","eat2.png")
      gymImg = loadAnimation("gym1.png","gym2.png");
      gym2Img = loadAnimation("gym11.png","gym12.png");
      sleepImg = loadAnimation("sleep.png");
      moveImg = loadAnimation("move.png");
    }

    function setup() {
      createCanvas(950,530);
      iss = createSprite(450,200);
      iss.addImage("myBg",issImg);
      iss.scale = 0.2;

      astranout = createSprite(560,300);
      astranout.addAnimation("myAstranout",sleepImg);
      astranout.scale = 0.1;

      edges = createEdgeSprites();
 }

    function draw() {
      background(0); 

      astranout.bounceOff(edges);

      if(keyDown("up")){
        astranout.addAnimation("brushing",brushImg);
        astranout.changeAnimation("brushing");
        astranout.y = 350;
        astranout.x = 500;
        astranout.setVelocity(3,4);
      }
      if(keyDown("left")){
        astranout.addAnimation("eating",eatImg);
        astranout.changeAnimation("eating");
        astranout.y = 350;
        astranout.x = 500;
        astranout.setVelocity(3,4);
      }
      if(keyDown("right")){
        astranout.addAnimation("bathing",bathImg);
        astranout.changeAnimation("bathing");
        astranout.y = 350;
        astranout.x = 500;
        astranout.setVelocity(3,4);
      }
      if(keyDown("down")){
        astranout.addAnimation("gyming",gymImg);
        astranout.changeAnimation("gyming");
        astranout.y = 350;
        astranout.x = 500;
        astranout.setVelocity(3,4);
      }
      if(keyDown("space")){
        astranout.addAnimation("gyming2",gym2Img);
        astranout.changeAnimation("gyming2");
        astranout.y = 350;
        astranout.x = 500;
        astranout.setVelocity(3,4);
      }
      if(keyDown("m")){
        astranout.addAnimation("move",moveImg);
        astranout.changeAnimation("move");
        astranout.setVelocity(3,4);
      }
       drawSprites(); 
      textSize(15);
      fill("white")
      text("INSTRUCTIONS : ",300,20);
      text("UP ARROW TO BRUSH ",300,35);
      text("RIGHT ARROW TO BATH ",300,55);
      text("LEFT ARROW TO EAT ",300,75);
      text("DOWN ARROW TO GYM ",300,95);
      text("SPACE BAR TO GYM2",300,115);
      text("M TO MOVE",300,135);
    }