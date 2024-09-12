import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrl: './page-profil.component.scss'
})
export class PageProfilComponent {
  
  protected readonly faPenToSquare = faPenToSquare;
  constructor(
    private router: Router,

  ) { }
  changepassword(): void {
    this.router.navigate(['changepassword']);
  }
}
