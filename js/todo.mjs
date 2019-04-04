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
  // console.log('all items ', list.items);
  // console.log(
  //   'id of last LI',
  //   document.querySelector('#pending-list li:last-child').id,
  // );

  ID += 1;
});

document.querySelector('#pending-list').addEventListener('click', (event) => {
  if (event.target.nodeName === 'LI') {
    return list.toggleDone(parseInt(event.target.id));
  }
  return list.toggleDone(parseInt(event.target.parentNode.id));
});

document.querySelector('#pending-list').addEventListener('dblclick', (event) => {
  if (event.target.nodeName === 'LI') {
    return list.removeItem(parseInt(event.target.id));
  }
  return list.removeItem(parseInt(event.target.parentNode.id));
});
