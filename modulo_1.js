
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'lightgrey';
    pincel.fillRect(0, 0, 600, 400);
 
    pincel.fillStyle = 'green';
    pincel.fillRect(0, 0, 200, 400);
  
    pincel.fillStyle = 'red';
    pincel.fillRect(400, 0, 200, 400);

    pincel.fillStyle = 'yellow';
    pincel.beginPath();
    pincel.moveTo(300, 200);
    pincel.lineTo(200, 400);
    pincel.lineTo(400, 400);
    pincel.fill();
    /*
    Com esta etapa concluída, partiremos para a utilização da função arc(), 
    para traçarmos nossa esfera. Nela, incluiremos as seguintes informações:

    Posicionamento da esfera, que definiremos como 300 (X) e 200 (Y);
    Tamanho, ou seja, o raio - que definiremos como 50;
    O ângulo inicial, e o ângulo final, em radianos (multiplicado por PI - 3,14);
    */

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(300, 200, 50, 0, 2 * 3.14);
    pincel.fill();
