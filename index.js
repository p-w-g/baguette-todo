class Task {
  constructor(title, description, id) {
    this.state = {
      title,
      description,
      id,
      done: false,
    };
  }
}

class List {
  constructor() {
    this.items = [];
  }

  addItem(title, description, id) {
    this.items.push(new Task(title, description, id));
    this.renderList();
  }

  removeItem(ID) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].state.id === ID) {
        this.items.splice(i, 1);
      }
    }
    this.renderList();
  }

  toggleDone(ID) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].state.id === ID && this.items[i].state.done === false) {
        document.getElementById(ID).classList.toggle('checked');
        this.items[i].state.done = true;
        break;
      }
      if (this.items[i].state.id === ID && this.items[i].state.done === true) {
        document.getElementById(ID).classList.toggle('checked');
        this.items[i].state.done = false;
      }
    }
  }

  renderList() {
    const itemElements = document.createElement('ul');
    itemElements.className = 'list-unstyled';

    this.items.forEach((item) => List.renderSingleListing(item, itemElements));

    document.querySelector('#pending-list').innerHTML = '';
    document.querySelector('#pending-list').appendChild(itemElements);
  }

  static renderSingleListing(item, appendTo) {
    const listCard = document.createElement('li');
    const cardTitle = document.createElement('h3');
    const cardDescription = document.createElement('p');
    cardTitle.innerHTML = item.state.title;
    cardDescription.innerHTML = item.state.description;
    listCard.setAttribute('id', item.state.id);

    if (item.state.done === true) {
      listCard.classList.add('checked');
    }

    listCard.appendChild(cardTitle);
    listCard.appendChild(cardDescription);
    appendTo.appendChild(listCard);
  }
}

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

document
  .querySelector('#pending-list')
  .addEventListener('dblclick', (event) => {
    if (event.target.nodeName === 'LI') {
      list.removeItem(parseInt(event.target.id));
    } else {
      list.removeItem(parseInt(event.target.parentNode.id));
    }
    return list.renderList();
  });
