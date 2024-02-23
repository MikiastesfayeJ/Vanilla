//document.querySelector('.lists').innerText = 'TEST';
//document.querySelector('.input').value = 'TEST';

const items = document.querySelector('.lists');
const item = document.querySelector('.input');
const add = document.querySelector('.add-button');

add.addEventListener('click', () => {
    if (item.value !== '') {
        const newItem = document.createElement('div');
        newItem.innerHTML = item.value;
        newItem.classList.add('item');  //to add a class to the new item
        items.append(newItem);
        
        item.value = '';    //to remove the existing text on the textfield
    }
})