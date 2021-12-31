let tfoot = document.querySelector('.add-tarefa-foot');
let tr = document.querySelector('.add-tarefa-tr');
let tdAdd = tr.children[0];
let tdTarefa = tr.children[1];
let tdCategoia = tr.children[2];
let tdAction = tr.children[3];
let btConcluir = tdAction.children[0];
let btCancel = tdAction.children[1];

tfoot.addEventListener('click',(event) =>{
    let value = event.target.textContent;

    if(value == 'Adicionar'){
        initAdd(true);
    }

    if(value == 'Cancel'){
        initAdd(false);
    }

    if(value == 'Concluir'){
        let tarefa = {
            nome: tdTarefa.textContent,
            categoria: tdCategoia.textContent
        }
        addToTable(tarefa);
        initAdd(false);
    }
});

function initAdd(resp) {
    if(!resp){
        tdTarefa.textContent = '';
        tdCategoia.textContent = '';
    }
    tdAdd.hidden = resp;
    tdTarefa.hidden = !resp;
    tdCategoia.hidden = !resp;
    tdAction.hidden = !resp;
}