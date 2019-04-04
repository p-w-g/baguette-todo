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

export default Task;
