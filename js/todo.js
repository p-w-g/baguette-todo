import List from './List.js';

const footer = document.querySelector('footer');

footer.addEventListener('dblclick', () => {
  footer.parentNode.removeChild(footer);
});

const list = new List();
let ID = 1;
document.querySelector('#card-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (event.target[0].value === '') {
    return alert('Please add at least a Title');
  }
  list.addItem(event.target[0].value, event.target[1].value);

  document.querySelector('#card-title').value = '';
  document.querySelector('#card-description').value = '';
  list.items[ID - 1].state.ID = ID;
  ID += 1;
});
