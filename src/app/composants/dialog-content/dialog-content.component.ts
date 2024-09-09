import { Component } from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrl: './dialog-content.component.scss'
})
export class DialogContentComponent {

  protected readonly faPlus = faPlus;
}
