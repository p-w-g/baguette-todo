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
        return this.items.splice(i, 1);
      }
    }
    this.renderList();
  }

  toggleDone(ID) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].state.id === ID && this.items[i].state.done === false) {
        console.log(this.items[i].state.done);

        return (this.items[i].state.done = true);
      }
      if (this.items[i].state.id === ID && this.items[i].state.done === true) {
        console.log(this.items[i].state.done);
        return (this.items[i].state.done = false);
      }
    }
  }

  renderList() {
    const itemElements = document.createElement('ul');
    itemElements.className = 'list-unstyled';

    this.items.forEach((item) => {
      const listCard = document.createElement('li');
      const cardTitle = document.createElement('h3');
      const cardDescription = document.createElement('p');
      cardTitle.innerHTML = item.state.title;
      cardDescription.innerHTML = item.state.description;
      listCard.setAttribute('id', item.state.id);
      listCard.appendChild(cardTitle);
      listCard.appendChild(cardDescription);
      itemElements.appendChild(listCard);
    });

    document.querySelector('#pending-list').innerHTML = '';
    document.querySelector('#pending-list').appendChild(itemElements);
  }
}

export default List;
