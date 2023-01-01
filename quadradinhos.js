    
    var tela = document.querySelector ('canvas');
    var pincel = tela.getContext('2d');

        pincel.fillStyle = "lightgrey";
        pincel.fillRect(0, 0, 600, 400);

    function desenharQuadrado (x, y, width, height, cor) {
        pincel.fillStyle = cor;
        pincel.fillRect(x, y, width, height);
        pincel.fillStrokke = 'black';
        pincel.strokeRect(x, y, width, height);

    }
/*
     var x = 0;

     while (x < 250) {
         desenharQuadrado(x, 0, 50, 50, 'black');
         desenharQuadrado(x, 50, 50, 50, 'darkred');
         desenharQuadrado (x, 100, 50, 50, 'yellow');
         x = x + 50;

     }
 */
     for(var x = 0; x < 250; x = x + 50){

        desenharQuadrado(x, 0, 50, 50, 'black');
        desenharQuadrado(x, 50, 50, 50, 'darkred');
        desenharQuadrado (x, 100, 50, 50, 'yellow');

     }
