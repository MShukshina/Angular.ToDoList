import {Component, Input, OnInit} from '@angular/core';
import {RepositoriesService} from '../../repositories.service';
import {Repositories} from '../../Repositories';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-topbox',
  templateUrl: './topbox.component.html',
  styleUrls: ['./topbox.component.css']
})
export class TopboxComponent implements OnInit {

  public repositories: Repositories[];

  constructor(private http: HttpClient, private serviceRepositories: RepositoriesService) { }

  ngOnInit() {
    this.repositories = this.serviceRepositories.getRepositories();
  }

  removeRepositories() {
    this.serviceRepositories.removeRepositories();
    this.repositories = this.serviceRepositories.getRepositories();
  }

  onInputChange(input: HTMLInputElement) {
    const name: string = input.value;
    if (name) {
      console.log(1, 'yes');
      this.http.get('https://api.github.com/search/repositories?q=' + name).subscribe((data: Repositories[]) => this.repositories = data);
    }
  }

}
