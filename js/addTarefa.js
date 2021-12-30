let table = document.querySelector('.tarefas');
let button = document.querySelector('#add-tarefa');
let form = document.querySelector('#add-tarefa-form')

button.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(form.tarefa.value);
    console.log(form.categorias.value)
    
    let tr = document.createElement('tr');
    let tarefaTd = document.createElement('td');
    tarefaTd.textContent = form.tarefa.value;
    let categoriaTd = document.createElement('td');
    categoriaTd.textContent = form.categorias.value;
    let action = document.createElement('td');
    let concluirButton = document.createElement('button');
    concluirButton.textContent = 'Concluir';
    let removerButton = document.createElement('button');
    removerButton.textContent = 'Remover';

    action.appendChild(concluirButton);
    action.appendChild(removerButton);

    tr.appendChild(tarefaTd);
    tr.appendChild(categoriaTd);
    tr.appendChild(action);

    form.reset();
    table.appendChild(tr);
})