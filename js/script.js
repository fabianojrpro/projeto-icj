// Seleciona o elemento <h1> pelo seu id
var tituloMes = document.getElementById("titulo-mes");

// Seleciona o corpo da tabela pelo seu id
var tabelaCorpo = document.getElementById("tabela-corpo");

// Cria um novo objeto Date() que representa a data atual
var dataAtual = new Date();

// Define o conteúdo do <h1> para o nome do mês atual
tituloMes.innerHTML = dataAtual.toLocaleString("pt-BR", { month: "long" });

// Cria um objeto Date com o primeiro dia do mês atual
var primeiroDia = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);

// Cria um objeto Date com o último dia do mês atual
var ultimoDia = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);

// Calcula o número de dias do mês atual
var numDias = ultimoDia.getDate();

// Calcula o dia da semana correspondente ao primeiro dia do mês
var primeiroDiaSemana = primeiroDia.getDay();

// Cria uma nova linha na tabela
var novaLinha = tabelaCorpo.insertRow();

// Preenche as células vazias correspondentes aos dias da semana anteriores ao primeiro dia do mês
for (var i = 0; i < primeiroDiaSemana; i++) {
    var novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML = "";
}

// Preenche a tabela com os dias do mês
for (var i = 1; i <= numDias; i++) {
    // Adiciona uma nova célula na linha atual
    var novaCelula = novaLinha.insertCell();

    // Define o conteúdo da célula para o dia atual
    novaCelula.innerHTML = i;

    // Se chegamos ao final da semana, cria uma nova linha na tabela
    if (novaCelula.cellIndex == 6) {
        novaLinha = tabelaCorpo.insertRow();
    }
}



