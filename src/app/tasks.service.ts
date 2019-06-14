import {Injectable} from '@angular/core';

@Injectable()
export class TasksService {

  private tasks = [];

  constructor() { }

  public getTasks() {
    return this.tasks;
  }

  public remove(index: number) {
    return this.tasks.splice(index, 1);
  }

  public add(name: string) {
    this.tasks.push(name);
  }

}
