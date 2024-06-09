// cria referẽncia ao form e aos elementos h3 (onde será exibida a rerposta)
const form = document.querySelector("form");
const h3 = document.querySelector("h3");


// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
form.addEventListener('submit', (e) => {
  const quilo = Number(form.inQuilo.value);     // obtém o conteúdo dos campos
  const consumo = Number(form.inConsumo.value);

  const valor = (quilo / 1000) * consumo;       // calcula valor a ser pago 
  

  h3.innerText = 'Valor a pagar R$: ' + valor;   // exibe resposta
  

  e.preventDefault();           // evita envio do form
});

// - Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente.