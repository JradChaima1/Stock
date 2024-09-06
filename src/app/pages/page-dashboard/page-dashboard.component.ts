import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss'
})
export class PageDashboardComponent {
  constructor(protected router: Router){
  }
}
