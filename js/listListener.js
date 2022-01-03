ul.addEventListener('click',(event)=>{
    let target = event.target;
    let parentLi = target.parentNode.parentNode;
    let value = event.target.textContent;

    if(value == 'Check'){
        parentLi.classList.add('Checked');
        isChecked(true,parentLi);
    }

    if(value == 'Uncheck'){
        parentLi.classList.remove('Checked');
        isChecked(false,parentLi);
    }

    if(value == 'Delete'){
        parentLi.remove();
    }
})

function isChecked(resp,li){
    li.children[2].children[0].hidden = resp;
    li.children[2].children[1].hidden = !resp;
}