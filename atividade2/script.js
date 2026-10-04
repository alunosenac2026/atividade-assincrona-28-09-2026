const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
    .then(resposta => resposta.json())
    .then(tarefas => {

        const lista = document.getElementById("lista-tarefas");

        tarefas.forEach(tarefa => {

            const item = document.createElement("li");

            const status = tarefa.completed
                ? "Concluída"
                : "Pendente";

            item.textContent = `${tarefa.title} - ${status}`;

            lista.appendChild(item);
        });

        console.log("Tarefas recebidas:", tarefas);
    })
    .catch(erro => {
        console.error("Erro ao buscar as tarefas:", erro);
    });
