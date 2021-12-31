let dataList = document.querySelector('#categorias-opt')

let categorias = ['Estudo', 'Trabalho'];

categorias.forEach(cat => {
    let opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    dataList.appendChild(opt);
});

function addCategoria(categoria) {
    categorias.push(categoria);
    let opt = document.createElement('option');
    opt.value = categoria;
    opt.textContent = categoria;
    dataList.appendChild(opt);
}