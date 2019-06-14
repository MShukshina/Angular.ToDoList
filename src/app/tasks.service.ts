export class TasksService {

  private tasks = [];

  constructor() { }

  public getTasks() {
    return this.tasks;
  }

  taskDelete(i) {
    this.tasks.splice(i, 1);
  }

  public remove(index: number) {
    return this.tasks.splice(index, 1);
  }

  public add(name) {
    this.tasks.push(name);
  }

}
