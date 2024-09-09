import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {faCloudArrowUp, faFileExport, faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.scss'
})
export class PageClientComponent {
  constructor(
    private router: Router,

  ) { }

  protected readonly faPlus = faPlus;
  protected readonly faFileExport = faFileExport;
  protected readonly faCloudArrowUp = faCloudArrowUp;
  nouveauClient(): void {
    this.router.navigate(['nouveauclient']);
  }
}
