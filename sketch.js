var catImg1,cat,mouseImg1,mouse,gardenImg,garden

function preload() {
 //load the images here
 catImg1.loadImage(cat1.png);
 mouseImg1.loadImage(mouse1.png);
 gardenImg.loadImage(garden.png);

}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage(gardenImg);

    cat = createSprite(700,200);
    cat.addImage(catImg1);

    mouse = createSprite(200,200);
    mouse.addImage(mouseImg1);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
