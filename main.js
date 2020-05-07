// REST //

function soma(a , b ,  ...params){

    return params;
}

console.log(soma(1 , 3 , 4,5,6,7,8));

// SPREAD

const user1 = {
nome: "João",
idade: 18,
empresa: "Blip"

};

const user2 = {...user1, nome: 'Gustavo' , idade: 21 }

console.log(user2);