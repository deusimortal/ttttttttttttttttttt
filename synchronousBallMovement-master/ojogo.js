class Tempim {
    constructor(){
    }
    getState(){
        var cronos = database.ref('ojogotempo');
           cronos.on("value",function(data){
           temporum = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            temporum:state
        });
    }
    start(){
        if(temporum === 0){
            jogador = new Osburro();
            jogador.getCount();
            chatice = new Lixo();
            chatice.display();
        }
    }    
    


}