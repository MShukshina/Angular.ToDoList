import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RepositoriesPageService} from '../../repositories-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() pageChange = new EventEmitter<string>();

  public countPage: { count: string; };

  constructor(private servicePage: RepositoriesPageService) {}


  ngOnInit() {
    this.countPage = this.servicePage.getCountPage();
  }

  public onPageChange() {
    this.pageChange.emit();
  }

}
