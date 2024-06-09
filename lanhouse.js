// cria referẽncia ao form e aos elementos h3 e h4 ( onde será ebixi a resposta) 
const form = document.querySelector("form");
const h3 = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
form.addEventListener('submit', (e) => {
  const valor = Number(form.inValor.value);     // obtém o conteúdo dos campos
  const tempo = Number(form.inTempo.value);

  const preco = (15 = 3)           // calcula o valor a ser pago

  h3.innerText = 'Promoção de ' + medicamento;
''  // exibe a resposta

  e.preventDefault();           // evita envio do form
});

//