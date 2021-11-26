var pecaDeXadrez = "Peão";
pecaDeXadrez = pecaDeXadrez.toLowerCase();

switch(pecaDeXadrez) {
    case "bispo":
      console.log("Só se move nas diagonais")
      break;
    case "peão":
        console.log("Só se move pra frente, uma casa de cada vez")
      break;
    case "rainha":
        console.log("Se move em qualquer direção")
      break;
    case "torre":
        console.log("Se move pra frente ou para os lados")
      break;
    case "cavalo":
        console.log("Só se move em L")
      break;
    case "rei":
        console.log("Se move em qualquer direção, uma casa de cada vez")
      break;
    
    default:
      console.log("Erro!Peça não encontrada!")
  }
  