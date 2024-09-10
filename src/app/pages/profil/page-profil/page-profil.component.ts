import { Component } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrl: './page-profil.component.scss'
})
export class PageProfilComponent {
  
  protected readonly faPenToSquare = faPenToSquare;
}
