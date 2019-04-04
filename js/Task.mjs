class Task {
  constructor(title, description, id) {
    this.state = {
      title,
      description,
      id,
      done: false,
    };
  }

  toggleDone() {
    this.state.done = true;
  }
}

export default Task;
