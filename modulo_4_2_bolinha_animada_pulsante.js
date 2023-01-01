
/*
    Sua tarefa será fazer uma bolinha pulsar, ou seja, seu raio deve ter tamanho mínimo de 20 e 
    tamanho máximo de 30. Sendo assim, de 20 até 30, o raio deve ser incrementado de um em um e 
    quando o valor do raio ultrapassar o máximo, ele deve sofrer um decremento de um. Contudo, 
    fique alerta, pois se o raio se tornar menor que 20, devemos voltar a incrementá-lo e assim por diante. 
    Para um efeito mais pomposo, use 20 milissegundos na taxa de atualização da tela.

*/

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 600);

    function desenhaCirculo(x, y, raio) {

        pincel.fillStyle = 'blue';
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();

    }

    function limpaTela() {

         pincel.clearRect(0, 0, 600, 600);
    }

    var raio = 19;
    var fatorCrescimento = 0;

    function atualizaTela() {

        limpaTela();
            if (raio > 30) {
            fatorCrescimento = -1;
            } 

            else if (raio < 20) {
            fatorCrescimento = 1;
            }

    raio = raio + fatorCrescimento;

    desenhaCirculo(300, 300, raio, 'blue');

  }4

  setInterval(atualizaTela, 20);
