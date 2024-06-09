// cria referẽncia ao form e aos elementos de resposta (pelo seu id) 
const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
form.addEventListener('submit', (e) => {
  const veiculo = form.inVeiculo.value;     // obtém o conteúdo dos campos
  const preco = Number(form.inPreco.value);

  const entrada = preco * 0.50;           // calcula o valor da entrada
  const parcela = (preco * 0.50) / 12;    // ... e das parcelas

  resp1.innerText = 'Promoção: ' + veiculo;   // exibe as resposta
  resp2.innerText = 'Entrada de R$: ' + entrada.toFixed(2);
  resp3.innerText = '12x de R$: ' + parcela.toFixed(2);
  
  e.preventDefault();           // evita envio do form
});

// - Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.