//Creacion de los Objetos jugadores
let player1 = {
    name:"player1",
    surname:"surname1",
    level:1,
    points:1
};
let player2 = {
    name:"player2",
    surname:"surname2",
    level:1,
    points:1
};
let players = [player1, player2];

function sumarPuntuacion(player){
    //Sumar puntos por haber matado un zombie y subida de nivel en el caso de obtener 10
    player.points ++;
    if (player.points%10 === 0) {
        player.level ++;
        alert(player.name+" "+player.surname+" ha subido al nivel "+player.level)
    }
}
function restarPuntuacion(player){
    //Restar puntos por haber sido golpeado por un zombie y bajada de nivel en el caso de perder 10 puntos
    player.points --;
    if (player.points !== 0 && (player.points+1) % 10 === 0) {
        player.level --;
        alert(player.name+" "+player.surname+" ha bajado al nivel "+player.level)
    }
    if (player.points === 0) resetearPuntuacion(player);
}
function resetearPuntuacion(player){
    //Reseteo del jugador si la puntuación llega a 0
    player.points = 1;
    alert("El jugador " + player.name+" "+player.surname  + " ha sido reseteado.")
}

//Utilización de los métodos solicitados
for (let i = 1; i <= 9; i++) {
    sumarPuntuacion(players[0]);
}
restarPuntuacion(players[0]);
sumarPuntuacion(players[0]);

restarPuntuacion(players[1]);