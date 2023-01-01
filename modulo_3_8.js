
/*
Que tal o usuário poder escolher de uma paleta a cor que desejar?

*/
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext ("2d");
        pincel.fillStyle =  "grey";
        pincel.fillRect (0 ,0 ,600 ,600);
        
    var desenhar = false;
    var cores = document.querySelector("input");

    function circulo(evento){

        if(desenhar){

            var x = evento.pageX - tela.offsetLeft;
            var y = evento.pageY - tela.offsetTop;
            pincel.fillStyle = cores.value;
            pincel.beginPath();
            pincel.arc (x ,y , 10, 0, 2 * 3.14);
            pincel.fill();
        }
    }

    tela.onmousemove = circulo;

    function desenharOk (){
        
        desenhar = true;

    }

    function PararDeDesenhar (){
        
        desenhar = false;

    }

        tela.onmousedown = desenharOk;
        tela.onmouseup = PararDeDesenhar;
