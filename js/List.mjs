import Task from './Task.mjs';

class List {
  constructor() {
    this.items = [];
  }

  addItem(title, description, id) {
    this.items.push(new Task(title, description, id));
    // console.log('items array', this.items);

    this.renderList();
  }

  removeItem(ID) {
    // instead for loop the array, match the ID's and filter out matches
    // this.items.splice(ID, 1);
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].state.id === ID) {
        this.items.splice(i, 1);
        // console.log('hello from for loop: ', this.items[i].state.id);
      }
    }
    this.renderList();

    console.log('input ID: ', ID);
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
