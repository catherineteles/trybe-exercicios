let a = 15;
let b = 15;
let c = 13;

if (a > b && a>c){
    console.log(a);
}
else if (a < b && c<b){
    console.log(b);
}
else if (c > b && c > a){
    console.log(c);
}
else if (c == b && c > a){
    console.log("Dois números iguais");
}

else if (c == a && c > b){
    console.log("Dois números iguais");
}
else if (a == b && c < a){
    console.log("Dois números iguais");
}

else{
    console.log("Os números são iguais");
}