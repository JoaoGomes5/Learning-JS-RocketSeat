"use strict";

var user = {
  nome: "João",
  idade: 19,
  morada: {
    pais: "Portugal",
    distrito: "Aveiro",
    cidade: "Espinho"
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(user);
