
class Task {
    constructor(title, description) {
        this.state = {
            title,
            description,
            done: false,
        };
    }

    toggleDone() {
        this.state.done = true;
    }
}

export default Task;
