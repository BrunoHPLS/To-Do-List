let categoria = 'Geral';

categoFilter.addEventListener('change',(event) => {
    categoria = event.target.value;
    let categoriaTitle = document.querySelector('.categoria');
    categoriaTitle.textContent = categoria;
    filtrarTabela();
});

function filtrarTabela() {
    let tarefas = getTarefas();
    if(categoria == 'Geral'){
        tarefas.forEach(element => {
            element.classList.remove('invisivel');
        });
    }else{
    tarefas.forEach(element => {
        let tarefa = {
            nome: element.children[0].textContent,
            categoria: element.children[1].textContent
        };
        if(tarefa.categoria==categoria){
            element.classList.remove('invisivel');
        }else{
            element.classList.add('invisivel');
        }
    });
    }
}