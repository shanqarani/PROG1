// CÍRCULO GRAN (1)
let diametro = 600;
let x = 0;
let y = 0;
let velX = 0;
let velY = 0;
let col = 0;

// CÍRCULO PEQUEÑO MÓVIL (2)
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
let diametro5 = 3500;
let x5 = 0;
let y5 = 0;
let velX5 = 0;
let velY5 = 0;
let col5 = 0;

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

}

function draw (){
  background (10, 5, 100, 10);

  // cuadrado 1
  noStroke ();
  fill (random (100, 200))
  square (l1, l2, l3)

  // círculo 1 (Gran)
  noStroke ();
  fill (5, 50, 150);
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


}




