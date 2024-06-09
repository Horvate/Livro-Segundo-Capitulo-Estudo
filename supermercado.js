// cria referẽncia ao form e aos elementos h3 e h4 ( onde será ebixi a resposta) 
const form = document.querySelector("form");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
form.addEventListener('submit', (e) => {
  const produto = form.inProduto.value;     // obtém o conteúdo dos campos
  const preco = Number(form.inPreco.value);

  const valor = (preco * 0.50) ;           // calcula o valor

  h3.innerText = produto + ' - Promoção Leve 3 por R$: 15.00';
  h4.innerText = 'O 3° produto custa apenas R$: ' + valor.toFixed(2);  // exibe a resposta

  e.preventDefault();           // evita envio do form
});


// - 50% de desconto (para um item) na compra de três unidades do produto.
// -Elaborar um programa que leia a descrição e preço de um produto. Após apresente as mensagens indicando a promoção.