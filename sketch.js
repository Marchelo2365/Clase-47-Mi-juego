var PPrincipal;
var Mob;
var CASADESIMPSONS;
var Piso;
var Bloque;
var Piedra;
//var Contador = 0;

//var Toque = false;
function preload(){

CASADESIMPSONS = loadImage("images/casadelossimpsons.jpeg")

}



function setup(){
createCanvas(displayWidth,displayHeight);

Mob = createSprite(width/2,height/2,10,10);
Mob.addImage(CASADESIMPSONS);

PPrincipal = createSprite(700,550,40,40);

Piso = createSprite(710,610,400,50);

PPrincipal.setCollider("rectangle",0,15,PPrincipal.width,PPrincipal.height);
PPrincipal.debug = true;
Piso.debug = true;

Bloque = createSprite(690, 550, 30, 30);


for(var i = 0; i<6; i++){
BLOQUE(690+i*110,550,1,Piedra+"i")
"Toque"+i = false;
"Contador" + i = 0;
}
}

function draw(){
   background("black");
    drawSprites();
    camera.position.x = PPrincipal.x;
    camera.position.y = PPrincipal.y;

    // collide con el piso y PPrincipal
    PPrincipal.collide(Piso);

    MOVEMENT();
    TOQUE(Piedra,5);
  
    for(var i = 0; i<6; i++){
        TOQUE(Piedra+"i",5);
        
        }

//gravedad
PPrincipal.velocityY = PPrincipal.velocityY + 0.8





}

function MOVEMENT(){

    PPrincipal.velocityX = 0;
    PPrincipal.velocityY = 0;

    if(keyIsDown(83)){
        PPrincipal.velocityY = 10;
        PPrincipal.velocityX = 0;
    }
    if(keyIsDown(87)){
        PPrincipal.velocityY = -10;
        PPrincipal.velocityX = 0;
    }
    if(keyIsDown(68)){
        PPrincipal.velocityX = 10;
    }
    if(keyIsDown(65)){
        PPrincipal.velocityX = -10;
    }




}

function TOQUE(Bloque1,NumToques, Contador = 0, Toque = false){
    if(mousePressedOver(Bloque1 )&& Toque === false){
        Contador++;
        Toque = true
        }  
        
       if(!mousePressedOver(Bloque1)){
           Toque = false;
       } 

    if(Contador === NumToques){
        Bloque1.lifetime = 0;
        Toque = false;
        Contador = 0;
    }
}

function BLOQUE(x, y, Bloques, Nombre){
    switch(Bloques) {
        case 1: Nombre = createSprite(x, y, 60,60);
                break;
        
        default: break;
      }


    
}
 