// cria referência ao form e aos elementos h3 e h4 (onde será exibida a resposta)
const form = document.querySelector("form");
const h3 = document.querySelector('h3');
const h4 = document.querySelector("h4");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
form.addEventListener("submit", (e) => {
 const titulo = form.inTitulo.value;      // obtém contéudo dos campos
 const duracao = Number(form.inDuracao.value);

 const horas = Math.floor(duracao / 60);  // arredonda para baixo o resultado
 const minutos = duracao % 60;            //obtém o resto da divisão

 h3.innerText = titulo          // exibe as respostas
 h4.innerText = horas + ' Hora(s) ' + minutos + ' Minuto(s)'

  e.preventDefault();            // evita envio do form
  
})


// - Elaborar um programa para um cinema, que leia o titulo e a duração de um filme em minutos. Exiba o titulo do filme e converta a duração para horas e minutos. 