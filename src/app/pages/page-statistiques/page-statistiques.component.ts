import { Component } from '@angular/core';

@Component({
  selector: 'app-page-statistiques',
  templateUrl: './page-statistiques.component.html',
  styleUrl: './page-statistiques.component.scss'
})
export class PageStatistiquesComponent {
  isMenuOpened: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
  }
}
