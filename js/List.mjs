import Task from './Task.mjs';

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

    this.items.forEach(item => List.renderSingleListing(item, itemElements));

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

export default List;
