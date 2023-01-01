
/*

O que achou do exercício que permitia desenhar na tela? Você percebeu que só conseguimos desenhar
 na cor azul? Que tal o usuário poder escolher de uma paleta a cor que desejar?

Primeiro, vamos ao código que permite o desenho com o mouse:
*/


    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    var cores = document.querySelector("input");
    
    pincel.fillStyle = 'lightgrey';
    pincel.fillRect(0, 0, 600, 600);

    var desenha = false;

    function desenhaCirculo(evento) {

        if (desenha) {
            var x = evento.pageX - tela.offsetLeft;
            var y = evento.pageY - tela.offsetTop;
            pincel.fillStyle = cores.value;
            pincel.beginPath();
            pincel.arc(x, y, 10, 0, 2 * 3.14);
            pincel.fill();
        }

            console.log(x + ',' + y);

    }

    tela.onmousemove = desenhaCirculo;

    function habilitaDesenhar() {
            desenha = true;
    }   

    function desabilitaDesenhar() {
        desenha = false;
    }

    tela.onmousedown = habilitaDesenhar;
    tela.onmouseup = desabilitaDesenhar;

