let categoria = 'Geral';

categoFilter.addEventListener('change',(event) => {
    categoria = event.target.value;
    filtrarTabela();
});

function filtrarTabela() {
    let tarefas = getTarefas();
    if(categoria == 'Geral'){
        tarefas.forEach(element => {
            element.hidden = false;
        });
    }else{
    tarefas.forEach(element => {
        let tarefa = {
            nome: element.children[0].textContent,
            categoria: element.children[1].textContent
        };
        if(tarefa.categoria == categoria){
            element.hidden = false;
        }else{
            element.hidden = true;
        }
    });
    }
}