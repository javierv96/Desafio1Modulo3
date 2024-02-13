//ingreso cantidad de rondas
const rondas = parseInt(prompt("Ingrese la cantidad de rondas que quiere jugar"));
//ciclo de rondas a jugar
for (let i = 1; i <= rondas; i++) {
    //Random opcion computadora
    const computadora = Math.floor(Math.random() * 3) + 1;
    //Ingreso de opcion Player 1
    const opcion = prompt("Ingrese Piedra, Papel o Tijera para jugar.").toLowerCase();
    console.log(opcion)
    //switch Player 1
    switch (opcion) {
        //Piedra
        case 'piedra':
            // Piedra V/s Piedra
            if (computadora === 1) {
                alert("Empate. La computadora eligio: Piedra");
            }
            // Piedra V/s Papel
            else if (computadora === 2) {
                alert("Lastima, Gana la Computadora. La computadora eligio: Papel");
            }
            // Piedra V/s Tijera
            else if (computadora === 3) {
                alert("Felicidades, Ganaste! La computadora eligio: Tijera");
            }
            break;
        //Papel
        case 'papel':
            // Papel V/s Piedra
            if (computadora === 1) {
                alert("Felicidades, Ganaste! La computadora eligio: Piedra");
            }
            // Papel V/s Papel
            else if (computadora === 2) {
                alert("Empate. La computadora eligio: Papel");
            }
            // Papel V/s Tijera
            else if (computadora === 3) {
                alert("Lastima, Gana la Computadora. La computadora eligio: Tijera");
            }
            break;
        //Tijera
        case 'tijera':
            // Tijera V/s Piedra
            if (computadora === 1) {
                alert("Lastima, Gana la computadora. La computadora eligio: Piedra");
            }
            // Tijera V/s Papel
            else if (computadora === 2) {
                alert("Felicidades, Ganaste! La computadora eligio: Papel");
            }
            // Tijera V/s Tijera
            else if (computadora === 3) {
                alert("Empate. La computadora eligio: Tijera");
            }
            break;
        //En caso de elegir una opcion no valida.
        default:
            alert("Warning: Ha ocurrido un error, la opcion elegida no es valida.");
            break;
    }
}