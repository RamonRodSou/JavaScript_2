
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 600);

    function circulo(x, y, corQuadrado, corBorda) {

        pincel.fillStyle = corBorda;
        pincel.beginPath();
        pincel.strokeStyle = "black";
        pincel.strokeRect(x, y, 100, 100);

        pincel.fillStyle = corQuadrado;
        pincel.fillRect(x, y, 100, 100 )
    }

    function imprimir(mensagem, x , y){

        pincel.font='20px Georgia';
        pincel.fillStyle='black';
        pincel.fillText(mensagem, x, y);

    }

    imprimir("Qual é a função?", 110, 90);

    for(var i = 0 ; i < 300; i = i + 100){

        circulo(i, 100 , "green","black");

        if (i == 200){
            circulo(i + 100, 100, "white", "black");
        }

    }

    