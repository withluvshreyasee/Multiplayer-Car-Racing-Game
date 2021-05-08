class Player {
    constructor (){
        this.index = null;
        this.distance = 0;
        this.name = null;

    }

updatePlayer(){
var pindex = "players/player" + this.index;
database.ref(pindex).set({
    name : this.name,
    distance : this.distance
})
}
getPlayerinfo(){
    var playerinfo = database.ref("players")
    playerinfo.on("value", (data)=>{
    allplayers = data.val();
    })
    console.log(allplayers);
}


getCount (){
           
var pc = database.ref("playercount");
            pc.on("value",(data)=>{
                playercount = data.val()
            })
        }
    update(count){
        database.ref('/').update({
            playercount : count
        })
    }

}