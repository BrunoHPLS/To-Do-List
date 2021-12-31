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

    let checkButton = document.createElement('button');
    checkButton.classList.add('tarefa-check')
    checkButton.textContent = 'Check';

    let uncheckButton = document.createElement('button');
    uncheckButton.classList.add('tarefa-uncheck');
    uncheckButton.textContent = 'Uncheck';
    uncheckButton.hidden = true;

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('tarefa-delete');
    deleteButton.textContent = 'Delete';

    tarefaAction.appendChild(checkButton);
    tarefaAction.appendChild(uncheckButton);
    tarefaAction.appendChild(deleteButton);

    tr.appendChild(tarefaNome);
    tr.appendChild(tarefaCategoria);
    tr.appendChild(tarefaAction);

    table.appendChild(tr);
}