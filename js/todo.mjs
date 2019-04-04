import List from './List.mjs';

const footer = document.querySelector('footer');
let ID = 0;

footer.addEventListener('dblclick', () => {
  footer.parentNode.removeChild(footer);
});

const list = new List();
document.querySelector('#card-form').addEventListener('submit', (event) => {
  event.preventDefault();

  if (event.target[0].value === '') {
    return alert('Please add at least a Title');
  }

  list.addItem(event.target[0].value, event.target[1].value, ID);

  document.querySelector('#card-title').value = '';
  document.querySelector('#card-description').value = '';

  // list.items[list.items.length].state.ID = ID;
  // console.log('curr added item', list.items[ID].state);
  // console.log('curr added items ID', list.items[ID].state.ID);
  console.log('all items ', list.items);
  // document.querySelector('#pending-list li:last-child').setAttribute('id', ID);
  console.log(
    'id of last LI',
    document.querySelector('#pending-list li:last-child').id,
  );

  ID += 1;
});

document.querySelector('#pending-list').addEventListener('click', (event) => {
  if (event.target.nodeName === 'LI') {
    console.log('Clicked element: LI', event.target.id);
    return list.removeItem(parseInt(event.target.id));
  }
  console.log('Clicked element: NOTLI', event.target.parentNode.id);
  return list.removeItem(parseInt(event.target.parentNode.id));
  // console.log('Object ', list.items[event.target.ID]);
});

// forloop array - mismatching index and ID
// on click and on double click events
// set done as condition to remove
