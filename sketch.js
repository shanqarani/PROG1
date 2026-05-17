// CÍRCULO MOVIL (1)
let diametro = 550;
let x = 0;
let y = 0;
let velX = 0;
let velY = 0;
let col = 0;

// CÍRCULO GRAN (2)
let diametro2 = 4270;
let x2 = 0;
let y2 = 0;
let velX2 = 0;
let velY2 = 0;
let col2 = 0;

// CÍRCULO CENTRAL AZUL (3)
let diametro3 = 900;
let x3 = 0;
let y3 = 0;
let velX3 = 0;
let velY3 = 0;
let col3 = 0;

// CÍRCULO TINTINEANTE (4)
let diametro4 = 350;
let x4 = 0;
let y4 = 0;
let velX4 = 0;
let velY4 = 0;
let col4 = 0;

// FONDO TINTINEANTE (CUADRADO)
let l1 = 0;
let l2 = 0;
let l3 = 15000;

// CÍRCULO OTRO TONO
let diametro5 = 3270;
let x5 = 0;
let y5 = 0;
let velX5 = 0;
let velY5 = 0;
let col5 = 0;

// PILL
let diamPill = 550;
let xPill = 0;
let yPill = 0;
let velXPill = 0;
let velYPill = 0;
let radio = diamPill / 2;
let anglePill = 0;
let radioPill = diamPill / 2;
let rotSpeed = 0.005;

// PILL 2
let diamPill2 = 250;
let xPill2 = 0;
let yPill2 = 0;
let velXPill2 = 0;
let velYPill2 = 0;
let anglePill2 = 0;
let pillWidth = diamPill2 * 2;
let pillHeight = diamPill2;



function setup (){
  createCanvas (windowWidth, windowHeight);
  //background (0);

  // centrar círculo1
  x = windowWidth / 2;
  y = windowHeight / 2;

      // movimiento random1
      velX = random(-15, 15);
      velY = random(-15, 15);

  // centrar círculo2
  x2 = windowWidth / 2;
  y2 = windowHeight / 2;

      // movimiento random2
      velX2 = random(-10, 10);
      velY2 = random(-10, 10);

  // centrar círculo3
  x3 = windowWidth / 2;
  y3 = windowHeight / 2;

  // centrar círculo 4
  x4 = windowWidth / 2;
  y4 = windowHeight / 2;  

      // movimiento random5
      velX5 = random (-20, 25);
      velY5 = random (-25, 25);
  
  // centrar Pill
  xPill = windowWidth / 2;
  yPill = windowHeight / 2;

      // movimiento random Pill
      velXPill = random (-10, 10);
      velYPill = random (-10, 10);

  // centrar Pill 2
  xPill2 = windowWidth / 2;
  yPill2 = windowHeight / 2;

      // movimiento random Pill2
      velXPill2 = random (-5, 5);
      velYPill2 = random (-5, 5);
}

function draw (){
  background (255);
  

  // cuadrado 1
  //noStroke ();
  //fill (random (255, 255))
  //square (l1, l2, l3)

  // círculo 1 (Gran)
  noStroke ();
  fill (10, 10, 100, 100);
  circle (x, y, diametro);

    // movimiento
    x += velX;
    y += velY;

      // REBOTE
      // si pega abajo rebota hacia arriba
      if (y >= height){
        velY *= -1;
      }

      // si pega a la derecha rebota hacia la izquierda
      if (x >= width){
        velX *= -1;
      }

      // si pega arriba rebota hacia abajo
      if (y < 0){
        velY *= -1;
      }

      // si pega a la izquierda rebota hacia a la derecha
      if (x < 0){
        velX *= -1;
      }

  // círculo 2 (Pequeño Móvil)
  noStroke ();
  fill (10, 50, 225, 150);
  circle (x2, y2, diametro2);
  
    // movimiento 2
    x2 += velX2;
    y2 += velY2;

      // REBOTE 2

      if (y2 >= height){
        velY2 *= -1
      }

      if (x2 >= width){
        velX2 *= -1
      }

      if (y2 < 0){
        velY2 *= -1
      }

      if (x2 < 0){
        velX2 *= -1
      }

  // círculo 3 (central azul)
  noStroke ();
  fill (5, 50, 150);
  circle (x3, y3, diametro3);

  // círculo 4 (tintineante)
  noStroke ();
  fill (random (122, 250));
  circle (x4, y4, diametro4);

  // círculo 5 (OTRO TONO)
  noStroke ();
  fill (200, 5, 5, 50)
  circle (x5, y5, diametro5);

    // movimiento 5
    x5 += velX5;
    y5 += velY5;

      // REBOTE
      if (y5 > height){
        velY5 *= -1   
      }

      if (x5 > width){
        velX5 *= -1
      }

      if (y5 < 0){
        velY5 *= -1      
      }

      if (x5 < 0){
        velX5 *= -1
      }

  // Pill
  anglePill += rotSpeed;
  noStroke ();
  fill (0);
  dibujarPill (xPill, yPill, diamPill, anglePill)

    // movimiento Pill
    xPill += velXPill;
    yPill += velYPill;

      // rebote Pill
      if (yPill > height){
        velYPill *= -1;
      }

      if (xPill > width){
        velXPill *= -1;
      }

      if (yPill < 0){
        velYPill *= -1;
      }

      if (xPill < 0){
        velXPill *= -1;
      }

  // Pill 2
  anglePill2 += rotSpeed;
  noStroke ();
  fill (0);
  dibujarPill2 (xPill2, yPill2, diamPill2, anglePill2)
    
    // movimiento Pill 2
    xPill2 += velXPill2;
    yPill2 += velYPill2;

          // rebote Pill 2
      if (yPill2 > height){
        velYPill2 *= -1;
      }

      if (xPill2 > width){
        velXPill2 *= -1;
      }

      if (yPill2 < 0){
        velYPill2 *= -1;
      }

      if (xPill2 < 0){
        velXPill2 *= -1;
      }
}

function dibujarPill (xPill, yPill, diamPill){

  push();
  translate (xPill, yPill);
  rotate (anglePill);
  
  // cuerpo principal - blanco
  fill(255, 255, 255, 50);
  circle(0, 0, diamPill);

  // franja de color (mitad superior)
  fill (255, 255, 255, 50);
  beginShape();
  arc (0, 0, diamPill, diamPill, PI, TWO_PI, CHORD);
  endShape();

  // anillo relieve
  noFill ();
  stroke (200, 200, 200, 50);
  strokeWeight (diamPill * 0.04);
  circle (0, 0, diamPill);

  // línea divisoria central
  stroke (150, 150, 150, 50);
  strokeWeight (diamPill * 0.03);
  line (-radio * 0.95, 0, radio * 0.95, 0);

  pop ();
}

function dibujarPill2 (xPill2, yPill2, diamPill2){

  push ();
  translate (xPill2, yPill2);
  rotate (anglePill2);

  // Dibuja el cuerpo de la píldora con esquinas redondeadas
  stroke (10)
  fill(255, 255, 255, 50);  
  rect(-pillWidth/2, -pillHeight/2, pillWidth, pillHeight, pillHeight/2, pillHeight/2, pillHeight/2, pillHeight/2);
  
  // línea divisoria
  stroke(150); 
  strokeWeight(1);
  line(0, -pillHeight/2, 0, pillHeight/2);
  
  pop();
}
