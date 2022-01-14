class Osburro{
    constructor(){
    }
    getCount(){
        var opovao = database.ref('people');
        opovao.on("value",function(data) {
            opovo = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            opovo:count
        });
    }
    update(name){
        var pessoa = "jogadorrrrr "+ opovo;
        database.ref(pessoa).set({
            arquivi:name
        });
    }
}