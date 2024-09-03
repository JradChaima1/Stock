import { Component } from '@angular/core';
import {MonPremierServiceService} from "../mes-services/mon-premier-service.service";

@Component({
  selector: 'app-mon-premier-composant',
  templateUrl: './mon-premier-composant.component.html',
  styleUrl: './mon-premier-composant.component.scss'
})
export class MonPremierComposantComponent {
  monInt = 0;
  constructor(
    private monService : MonPremierServiceService
  ) {
  }
ngOnInit(): void{
    this.monInt = this.monService.sommeDeuxPlusTrois();
}
}
