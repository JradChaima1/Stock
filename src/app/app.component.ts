import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',


  styleUrl: './app.component.scss'
})
export class AppComponent {
  faCoffee = faCoffee;
  title = 'my-stock';
  constructor(){

  }

}
