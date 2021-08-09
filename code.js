var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4487f065-644e-432f-b97e-100698018533","c55665e8-51a9-4ec1-9bb2-dfbdf4ba0244","bbfaecbc-d567-4f50-bcbf-4e8866667f46","1a42e20f-6e83-4bd7-9a52-6cd6e1ad14e5","de1d3dd8-f7f8-4b39-b5f4-09133a6a99dc","d21c9b7e-6749-453f-aaa8-179f85cae8e4"],"propsByKey":{"4487f065-644e-432f-b97e-100698018533":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"c55665e8-51a9-4ec1-9bb2-dfbdf4ba0244":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"bbfaecbc-d567-4f50-bcbf-4e8866667f46":{"name":"car_yellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"1a42e20f-6e83-4bd7-9a52-6cd6e1ad14e5":{"name":"cars_1","sourceUrl":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png","frameSize":{"x":73,"y":133},"frameCount":5,"looping":true,"frameDelay":20,"version":"a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":133},"rootRelativePath":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png"},"de1d3dd8-f7f8-4b39-b5f4-09133a6a99dc":{"name":"kidportrait_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/fDLnJ_hcVaJPc4oh8krv.gPzYVt1zz6r/category_faces/kidportrait_13.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":4,"version":"fDLnJ_hcVaJPc4oh8krv.gPzYVt1zz6r","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fDLnJ_hcVaJPc4oh8krv.gPzYVt1zz6r/category_faces/kidportrait_13.png"},"d21c9b7e-6749-453f-aaa8-179f85cae8e4":{"name":"PngItem_107747.png_1","sourceUrl":"assets/v3/animations/jIXfGoG_bb8FEexWyTgnNgbFzfy8RiS4oo6ofR0tIbc/d21c9b7e-6749-453f-aaa8-179f85cae8e4.png","frameSize":{"x":326,"y":1159},"frameCount":1,"looping":true,"frameDelay":4,"version":"sKkqEY_1pCR9QKwjQq1pK0Rf9fT8UXhU","loadedFromSource":true,"saved":true,"sourceSize":{"x":326,"y":1159},"rootRelativePath":"assets/v3/animations/jIXfGoG_bb8FEexWyTgnNgbFzfy8RiS4oo6ofR0tIbc/d21c9b7e-6749-453f-aaa8-179f85cae8e4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var signal;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  signal=createSprite(350,100,20,20)
  signal.setAnimation("PngItem_107747.png_1");
 signal.scale=0.1
  
  
car1.setAnimation("car_green_1");
car2.setAnimation("car_red_1");
car3.setAnimation("car_yellow_1");
car4.setAnimation("cars_1");
sam.setAnimation("kidportrait_13_1");
sam.scale=0.09
car1.scale=0.2
car2.scale=0.2
car3.scale=0.2
car4.scale=0.2
    
 
 
 
 
 
 
//add the velocity to make the car move.

 car1.velocityY=8
  car2.velocityY=-8
 car3.velocityY=8
 car4.velocityY=-8
 
 





function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2)
car3.bounceOff(boundary1)
car3.bounceOff(boundary2)
car4.bounceOff(boundary1)
car4.bounceOff(boundary2)

//Add the condition to make the sam move left and right
if (keyDown("right")) {
  sam.x=sam.x+5
}
if (keyDown("left")) {
  sam.x=sam.x-5
}


//Add the condition to reduce the life of sam if it touches the car.
  if (car1.isTouching(sam)||car2.isTouching(sam)||car3.isTouching(sam)||car4.isTouching(sam)) {
   sam.x=20
   sam.y=190
    life=life+1
  }
  
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
