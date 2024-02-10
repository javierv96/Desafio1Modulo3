const computadora = Math.floor(Math.random() * 3) + 1;
const opcion = parseInt(prompt("Ingrese 1 para elegir Pierda, 2 para elegir Papel, 3 para elegir Tijera"));
switch (opcion){
    case 1:
        if (computadora === 1){
            alert("Empate");
        }else if (computadora === 2){
            alert("Lastima, Gana la3 Computadora");
        }else if(computadora === 2){
            alert("Felicidades, Ganaste!");
        }
        break;
    case 2:
        if (computadora === 1){
            alert("Felicidades, Ganaste!");
        }else if (computadora === 2){
            alert("Empate");
        }else if(computadora === 2){
            alert("Lastima, Gana la Computadora");
        }
        break;
    case 3:
        if (computadora === 1){
            alert("Lastima, Gana la computadora");
        }else if (computadora === 2){
            alert("Felicidades, Ganaste!");
        }else if(computadora === 2){
            alert("Empate");
        }
        break;
    default:
        alert("Ha ocurrido un error");
        break;
    
}
switch (computadora){
    case 1:
        if (computadora === 1){
            alert ("La computadora eligio la opcion: Piedra");
        }
    case 2:
        if (computadora === 2){
            alert ("La computadora eligio la opcion: Papel");
        }
    case 3:
        if (computadora === 3){
            alert ("La computadora eligio la opcion: Tijera");
        }
}

