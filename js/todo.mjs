import List from './List.mjs';

const footer = document.querySelector('footer');

footer.addEventListener('dblclick', () => {
    footer.parentNode.removeChild(footer);
});

const list = new List();
let ID = 0;
document.querySelector('#card-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target[0].value === '') {
        return alert('Please add at least a Title');
    }
    list.addItem(event.target[0].value, event.target[1].value);

    document.querySelector('#card-title').value = '';
    document.querySelector('#card-description').value = '';
    list.items[ID].state.ID = ID;

    console.log('curr added item', list.items[ID].state);
    console.log('curr added items ID', list.items[ID].state.ID);

    ID += 1;
});

document.querySelector('#pending-list').addEventListener('click', (event) => {
    console.log('all items curr', list.items);
    console.log('Clicked element: ', event.target);
    console.log('Object ', list.items[event.target.ID]);
});
