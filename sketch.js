//variáveis
var box;
var box2;

function setup() {
  //criando a tela
  createCanvas(500,500);
  //criando sprites
  box = createSprite(250,250,50,50)
  box.shapeColor = "red";//cor do sprite
  box2 = createSprite(100,100,80,80);
  box2.shapeColor = "blue"
}

function draw() {
  background("#1fcc92");//cor do fundo

  //box.velocityY = -2 - velocidade do sprite

  if (keyDown("up")) {
    box.y = box.y -3
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.y = box.y +3
  }

  if (keyDown("space")) {
    background("purple")
  }


  drawSprites()//desenhar sprites na tela
}

