
function addToTable(tarefa) {
    let li = document.createElement('li');
    li.classList.add('tarefa');

    let tarefaNome = document.createElement('p');
    tarefaNome.classList.add('tarefa-nome');
    tarefaNome.textContent = tarefa.nome;

    let tarefaCategoria = document.createElement('p');
    tarefaCategoria.classList.add('tarefa-categoria');
    tarefaCategoria.textContent = tarefa.categoria;

    let tarefaAction = document.createElement('div');
    tarefaAction.classList.add('tarefa-action')

    let checkButton = document.createElement('button');
    checkButton.classList.add('button-check')
    checkButton.textContent = 'Check';

    let uncheckButton = document.createElement('button');
    uncheckButton.classList.add('button-uncheck');
    uncheckButton.textContent = 'Uncheck';
    uncheckButton.hidden = true;

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('button-delete');
    deleteButton.textContent = 'Delete';

    tarefaAction.appendChild(checkButton);
    tarefaAction.appendChild(uncheckButton);
    tarefaAction.appendChild(deleteButton);

    li.appendChild(tarefaNome);
    li.appendChild(tarefaCategoria);
    li.appendChild(tarefaAction);

    ul.appendChild(li);
    
    filtrarTabela();
}