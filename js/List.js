import Task from './Task.js';

class List {
  constructor() {
    this.items = [];
  }

  addItem(title, description) {
    this.items.push(new Task(title, description));
    this.renderList();
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
      listCard.appendChild(cardTitle);
      listCard.appendChild(cardDescription);
      itemElements.appendChild(listCard);
    });
    document.querySelector('#pending-list').innerHTML = '';
    document.querySelector('#pending-list').appendChild(itemElements);
  }


}

export default List;
