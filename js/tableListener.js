let tbody = document.querySelector('.tarefas');

tbody.addEventListener('click',(event)=>{
    let target = event.target;
    let parentTr = target.parentNode.parentNode;
    let value = event.target.textContent;
    console.log(value);

    if(value == 'Check'){
        parentTr.classList.add('Checked');
        isChecked(true,parentTr);
    }

    if(value == 'Uncheck'){
        parentTr.classList.remove('Checked');
        isChecked(false,parentTr);
    }

    if(value == 'Delete'){
        parentTr.remove();
    }
})

function isChecked(resp,tr){
    tr.children[2].children[0].hidden = resp;
    tr.children[2].children[1].hidden = !resp;
}