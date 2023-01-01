
/*
Para isso, foi necessário associar a função desenhaCirculo ao evento onclick da nossa tela. 
Aprendemos também que será o navegador que chamará a nossa função, pois ele sabe identificar 
cliques no canvas. Além de chamar a função, ele passará sempre um parâmetro para ela. Graças a 
esse parâmetro, temos acesso a várias informações sobre o evento disparado e, no caso, podemos 
descobrir a posição do eixo x e y da tela que o usuário clicou.

Como essa escolha será feita? A cada clique do botão DIREITO do mouse, a cor padrão, que é blue, 
deverá se tornar red. Se o usuário clicar mais uma vez com o botão DIREITO, a cor escolhida deverá 
ser green, nessa ordem. Por fim, se clicarmos novamente, voltamos para a cor blue e repetimos a 
ordem de seleção de cores.

Obs: com o botão ESQUERDO faremos os cliques para as bolinhas aparecerem.

você a associar a execução de uma função ao clique do botão direito do mouse. O evento responsável 
por isso é o oncontextmenu

----------------------------------------------------------------------------------------------------

Dessa vez quero propor algo diferente. Quando clicarmos na tela pressionando a tecla SHIFT, 
vamos desenhar uma bolinha acrescida de 20 ao seu raio. Se soltarmos a tecla e clicarmos, 
ela voltará com seu raio que hoje é 10.

Você deve estar se perguntando como saber se o usuário está pressionando a tecla SHIFT, 
certo? Você lembra que uma função passada para o evento onclick tem acesso às coordenadas do 
ponteiro do mouse? Pois é, além de sabermos as coordenadas, podemos perguntar também se a 
tecla SHIFT está pressionada usando evento.shiftKey. Dessa forma, se for true, é porque ela 
está sendo pressionada, se for false, é porque não foi.


*/


    function mudaCor() {

        indiceCorAtual++;

            if (indiceCorAtual >= cores.length) {
                indiceCorAtual = 0; // volta para a primeira cor, azul

        }

        return false; // para não exibir o menu padrão do canvas

        }

    function desenhaCirculo(evento) {


        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

            var raio = 10;

            if (evento.shiftKey) {
                raio = raio + 20; // raio agora passa a valer 30!

             }

            pincel.fillStyle = cores[indiceCorAtual];
            pincel.beginPath();
            pincel.arc(x, y, raio , 0, 2 * 3.14);
            pincel.fill();
            console.log(x + ',' + y);


    }


        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d');
            pincel.fillStyle = 'grey';
            pincel.fillRect(0, 0, 600, 400);

        var cores = ['blue', 'red', 'green']
        var indiceCorAtual = 0; // começa com bl

        tela.onclick = desenhaCirculo;
        tela.oncontextmenu = mudaCor;
