let dataList = document.querySelector('#categorias-opt')
let categoFilter = document.querySelector('#categoFilter');

function getTable() {
    return document.querySelector('.tarefas');
}

function getTarefas() {
    return document.querySelectorAll('.tarefa');
}

let ul = getTable();

let optGeral = document.createElement('option');
optGeral.value = 'Geral';
optGeral.textContent = 'Geral';
categoFilter.appendChild(optGeral);

let categorias = [];

function addCategoria(categoria) {
    categorias.push(categoria);
    let opt = document.createElement('option');
    opt.value = categoria;
    opt.textContent = categoria;
    dataList.appendChild(opt.cloneNode(false));
    categoFilter.appendChild(opt);
}

addCategoria('Rotina');