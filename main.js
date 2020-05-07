const user = {
    nome:"João",
    idade: 19,
    morada : {
        pais: "Portugal",
        distrito : "Aveiro",
        cidade : "Espinho",
    },
};

 function mostraNome({nome,idade }){
     console.log(nome,idade);
 }

 mostraNome(user);

