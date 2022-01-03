let addTarefaDiv = document.querySelector('.add-tarefa-container');
let buttonAdd = addTarefaDiv.children[0];
let tarefaInput = addTarefaDiv.children[1];
let categoriaInput = addTarefaDiv.children[2];
let categoriasOpt = addTarefaDiv.children[3];
let buttonConcluir = addTarefaDiv.children[4];
let buttonCancel = addTarefaDiv.children[5];

addTarefaDiv.addEventListener('click',(event) =>{
    let value = event.target.textContent;

    if(value == 'Adicionar'){
        sessionAdd(true);
    }

    if(value == 'Cancel'){
        sessionAdd(false);
    }

    if(value == 'Concluir'){
        let tarefa = {
            nome: tarefaInput.value,
            categoria: categoriaInput.value
        }
        addToTable(tarefa);
        if(!categorias.includes(tarefa.categoria)){
            addCategoria(tarefa.categoria);
        }
        sessionAdd(false);
    }
});

function sessionAdd(resp) {
    tarefaInput.value = '';
    categoriaInput.value = '';

    buttonAdd.hidden = resp;
    tarefaInput.hidden = !resp;
    categoriaInput.hidden = !resp;
    buttonConcluir.hidden = !resp;
    buttonCancel.hidden = !resp;
}