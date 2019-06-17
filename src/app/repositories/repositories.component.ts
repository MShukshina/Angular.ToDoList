import { Component, OnInit } from '@angular/core';
import {RepositoriesService} from '../repositories.service';
import {Repositories} from '../Repositories';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  public repositories: Repositories[];

  constructor(private serviceRepositories: RepositoriesService) { }

  ngOnInit() {
    this.repositories = this.serviceRepositories.getRepositories();
  }

}
