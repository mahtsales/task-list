/*
declaramos a variável const para cada especificação: 
input
button
lista
busca o elemento pelo id descrito no html
*/

const input = document.getElementById("taskInput");
const button = document.getElementById("taskBtn");
const lista = document.getElementById("taskList");

button.addEventListener("click", function () { //adiciona o evento de click no botão, e a função a ser executada quando o evento ocorrer
    const taskText = input.value; //armazena o valor do input em uma variável para ser usada posteriormente

    if (taskText.trim() === "") { //verifica se o texto da tarefa é vazio ou contém apenas espaços em branco
        alert("Por favor, digite uma tarefa válida."); //exibe um alerta pedindo para o usuário digitar uma tarefa válida
        return; //interrompe a execução da função se a tarefa for inválida
    }

    const li = document.createElement("li"); //toda vez que o botão for clicado, cria um novo elemento "li" (item de lista)

    li.textContent = taskText; //valor de li é igual ao valor do input, ou seja, o texto da tarefa que o usuário digitou

    lista.appendChild(li); //adiciona o elemento "li" criado como filho da lista "ul" (taskList), ou seja, adiciona a tarefa à lista de tarefas

    input.value = ""; //limpa o campo de input após adicionar a tarefa à lista

});

