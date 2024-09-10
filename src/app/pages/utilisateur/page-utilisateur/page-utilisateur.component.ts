import { Component } from '@angular/core';
import {faCloudArrowUp, faFileExport, faPlus} from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrl: './page-utilisateur.component.scss'
})
export class PageUtilisateurComponent {
  constructor(
    private router: Router,

  ) { }
  protected readonly faPlus = faPlus;
  protected readonly faFileExport = faFileExport;
  protected readonly faCloudArrowUp = faCloudArrowUp;

  nouveauUtilisateur(): void {
    this.router.navigate(['nouvelutilisateur']);
  }
}
