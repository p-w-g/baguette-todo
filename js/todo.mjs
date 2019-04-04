import List from './List.mjs';

const footer = document.querySelector('footer');
let ID = 0;

footer.addEventListener('dblclick', () => {
  footer.parentNode.removeChild(footer);
});

const list = new List();

document.querySelector('#card-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const title = event.target[0].value;
  if (title === '') {
    return alert('Please add at least a Title');
  }

  const description = event.target[1].value;
  list.addItem(title, description, ID);

  document.querySelector('#card-title').value = '';
  document.querySelector('#card-description').value = '';

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
    list.removeItem(parseInt(event.target.id));
  } else {
    list.removeItem(parseInt(event.target.parentNode.id));
  }
  return list.renderList();
});
