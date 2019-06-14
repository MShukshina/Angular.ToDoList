import {Injectable} from '@angular/core';
import {Task} from './task';

@Injectable()
export class TasksService {

  private tasks: Task[] = [];

  constructor() { }

  public getTasks() {
    return this.tasks;
  }

  public remove(index: number) {
    return this.tasks.splice(index, 1);
  }

  public add(name: string) {
    this.tasks.push({name, id: this.tasks.length });
  }

}
