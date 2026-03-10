/*
declaramos a variável const para cada especificação: 
input
button
lista
busca o elemento pelo id descrito no html
*/

const input = document.getElementById("taskInput"); /*procura o elemento com o ID "taskInput"*/
const button = document.getElementById("taskBtn");
const lista = document.getElementById("taskList");

button.addEventListener("click", function () {
   
    console.log(input.value); /*imprime o valor do input no console*/
    
    const taskText = input.value;

    const li = document.createElement("li");

li.textContent = taskText;

lista.appendChild(li);
});

