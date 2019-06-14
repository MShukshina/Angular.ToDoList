import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Repositories} from './Repositories';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  private repositories: Repositories[];

  constructor(private http: HttpClient) { }

  public getRepositories() {
    return this.repositories;
  }

  public removeRepositories() {
    this.repositories.length = 0;
  }
}
