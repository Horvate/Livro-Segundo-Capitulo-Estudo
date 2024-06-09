// cria referẽncia ao form e aos elementos h3 e h4 ( onde será ebixi a resposta) 
const form = document.querySelector("form");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
form.addEventListener('submit', (e) => {
  const medicamento = form.inMedi.value;     // obtém o conteúdo dos campos
  const preco = Number(form.inPreco.value);

  const valor = Math.floor(preco * 2) ;           // calcula o valor a ser pago

  h3.innerText = 'Promoção de ' + medicamento;
  h4.innerText = 'Leve 2 por apenas R$: ' + valor.toFixed(2);  // exibe a resposta

  e.preventDefault();           // evita envio do form
});

// - Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total.