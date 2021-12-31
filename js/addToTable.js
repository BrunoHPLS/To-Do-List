let table = document.querySelector('.tarefas');

function addToTable(tarefa) {
    let tr = document.createElement('tr');
    tr.classList.add('tarefa');

    let tarefaNome = document.createElement('td');
    tarefaNome.classList.add('tarefa-nome');
    tarefaNome.textContent = tarefa.nome;

    let tarefaCategoria = document.createElement('td');
    tarefaCategoria.classList.add('tarefa-categoria');
    tarefaCategoria.textContent = tarefa.categoria;

    let tarefaAction = document.createElement('td');
    tarefaAction.classList.add('tarefa-action')

    let concluirButton = document.createElement('button');
    concluirButton.textContent = 'Concluir';

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    tarefaAction.appendChild(concluirButton);
    tarefaAction.appendChild(deleteButton);

    tr.appendChild(tarefaNome);
    tr.appendChild(tarefaCategoria);
    tr.appendChild(tarefaAction);

    table.appendChild(tr);
}