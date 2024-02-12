//ingreso cantidad de rondas
const rondas = parseInt(prompt("Ingrese la cantidad de rondas que quiere jugar"));
//ciclo de rondas a jugar
for (var i = 1; i <= rondas; i++) {
    //Random opcion computadora
    const computadora = Math.floor(Math.random() * 3) + 1;
    //Ingreso de opcion Player 1
    const opcion = parseInt(prompt("Ingrese 1 para elegir Piedra, 2 para elegir Papel, 3 para elegir Tijera"));
    console.log(opcion)
    //switch Player 1
    switch (opcion) {
        //Piedra
        case 1:
            // Piedra V/s Piedra
            if (computadora === 1) {
                alert("Empate");
            }
            // Piedra V/s Papel
            else if (computadora === 2) {
                alert("Lastima, Gana la Computadora");
            }
            // Piedra V/s Tijera
            else if (computadora === 3) {
                alert("Felicidades, Ganaste!");
            }
            break;
        //Papel
        case 2:
            // Papel V/s Piedra
            if (computadora === 1) {
                alert("Felicidades, Ganaste!");
            }
            // Papel V/s Papel
            else if (computadora === 2) {
                alert("Empate");
            }
            // Papel V/s Tijera
            else if (computadora === 3) {
                alert("Lastima, Gana la Computadora");
            }
            break;
        //Tijera
        case 3:
            // Tijera V/s Piedra
            if (computadora === 1) {
                alert("Lastima, Gana la computadora");
            }
            // Tijera V/s Papel
            else if (computadora === 2) {
                alert("Felicidades, Ganaste!");
            }
            // Tijera V/s Tijera
            else if (computadora === 3) {
                alert("Empate");
            }
            break;
        //En caso de elegir una opcion no valida.
        default:
            alert("Warning: Ha ocurrido un error, la opcion elegida no es valida.");
            break;
    }
    //switch Computadora
    console.log(computadora);
    switch (computadora) {
        //Piedra
        case 1:
            alert("La computadora eligio la opcion: Piedra");
            break;
        //Papel
        case 2:
            alert("La computadora eligio la opcion: Papel");
            break;
        //Tijera
        case 3:
            alert("La computadora eligio la opcion: Tijera");
            break;
        //ERR0R
        default:
            alert("Ha ocurrido un error.");
            break;
    }
}