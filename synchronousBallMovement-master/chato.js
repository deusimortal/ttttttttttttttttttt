class Lixo{
    constructor(){
    }
    
    display(){
        var nome =  createElement('h2');
        nome.html("titulo");
        nome.position(40,0);
        var caixa = createImput("yei");
        var meaperte = createButtom("yoho");
        caixa.position(80,170);
        meaperte.position(220,195);
        meaperte.mousePressed(
            function(){
                caixa.hide();
                meaperte.hide();
                var arquivi = caixa.value();
                opovo+=1;
                jogador.update(arquivi);
                jogador.updateCount(opovo);
                var bomdia = createElement("h2");
                bomdia.html("ola nino " + arquivi);
                bomdia.position(115,130);
            }
        );
    }
}