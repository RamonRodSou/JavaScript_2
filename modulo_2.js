 function quadrado(x, y, cor){

        pincel.fillStyle = cor;
        pincel.fillRect(x, y, 50, 50);
        pincel.strokeStyle = "black";
        pincel.strokeRect(x, y, 50,50);

    }

    function quadradinho(eixoX, eixoY, tamanhoX, tamanhoY){

        pincel.strokeStyle = "black";
        pincel.strokeRect(eixoX, eixoY, tamanhoX,tamanhoY);
        pincel.fillStyle = "blue";
        pincel.fillRect (eixoX ,eixoY , tamanhoX, tamanhoY);
        
    }
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillStyle = "lightgrey";
        pincel.fillRect (0 ,0 , 600, 600);

        var y = 0 ;
        var x = 600 ;

     while (y < 600){

        x = x - 50;
        quadrado( x , y , "green");
        y = y + 50;

            for(var xY = 0; xY < 600; xY = xY + 50){
            quadrado(xY, xY , "green");

                if (xY == 300){

                    quadradinho(250,250, 50, 50);
                    quadradinho(300,300, 50, 50);
                }    
             }
            
        if (x == 250){

            quadradinho(300,250, 50, 50);
            quadradinho(250,300, 50, 50);
        }
     }
