import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
@Component({
  selector: 'app-receipt-container',
  templateUrl: './receipt-container.component.html',
  styleUrls: ['./receipt-container.component.css'],
})
export class ReceiptContainerComponent implements OnInit {
  @Input() receipes: Recipe[] = [];

  constructor() {}

  ngOnInit(): void {}

  getIngredients(receipe: Recipe) {
    let ingredients = '';

    const allIngredients = receipe.ingredients;

    if (allIngredients !== null) {
      for (let index = 0; index < allIngredients.length; index++) {
        ingredients = ingredients + ' ' + allIngredients[index].name;
      }
    }

    return ingredients;
  }
}
