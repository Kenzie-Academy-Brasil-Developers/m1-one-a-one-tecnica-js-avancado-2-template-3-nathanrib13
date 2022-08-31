function verificaLista (list, num) {
let count = 0 
    for(let i = 0; i<list.length; i++){
    if(list[i] === num){
        count += 1  
    }
}

if(count % 5 === 0 && count > 0) {
    return "É multiplo de 5"
}
    return "Não é multiplo de 5"
}


const lista = [1, 1, 2, 1, 1,1,];
console.log(verificaLista(lista, 1))    