import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './fourth-component.component.html',
  styleUrls: ['./fourth-component.component.css']
})
export class FourthComponentComponent {
  title = 'angular';
  name = "quarto";
  TextColor: string = 'yellow';
  pringlesInfo = [
    { flavor: 'Original', description: 'Classic potato crisps with a salty taste.' },
    { flavor: 'Sour Cream & Onion', description: 'Potato crisps with a tangy sour cream and onion flavor.' },
  ];
}
