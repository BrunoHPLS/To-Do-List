let tfoot = document.querySelector('.add-tarefa-foot');
let tr = document.querySelector('.add-tarefa-tr');
let tdAdd = tr.children[0];
let tdTarefa = tr.children[1];
let tdCategoria = tr.children[2];
let tdAction = tr.children[3];
let btConcluir = tdAction.children[0];
let btCancel = tdAction.children[1];

tfoot.addEventListener('click',(event) =>{
    let value = event.target.textContent;

    if(value == 'Adicionar'){
        sessionAdd(true);
    }

    if(value == 'Cancel'){
        sessionAdd(false);
    }

    if(value == 'Concluir'){
        let tarefa = {
            nome: tdTarefa.children[0].value,
            categoria: tdCategoria.children[0].value
        }
        addToTable(tarefa);
        if(!categorias.includes(tarefa.categoria)){
            addCategoria(tarefa.categoria);
        }
        sessionAdd(false);
    }
});

function sessionAdd(resp) {
    tdTarefa.children[0].value = '';
    tdCategoria.children[0].value = '';

    tdAdd.hidden = resp;
    tdTarefa.hidden = !resp;
    tdCategoria.hidden = !resp;
    tdAction.hidden = !resp;
}