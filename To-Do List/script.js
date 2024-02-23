//document.querySelector('.lists').innerText = 'TEST';
//document.querySelector('.input').value = 'TEST';

const items = document.querySelector('.lists');
const item = document.querySelector('.input');
const add = document.querySelector('.add');

add.addEventListener('click', () => {
    const newItem = document.createElement('div');
    newItem.innerHTML = item.value;
    items.append(newItem);
})

