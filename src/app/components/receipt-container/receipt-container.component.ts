import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
@Component({
  selector: 'app-receipt-container',
  templateUrl: './receipt-container.component.html',
  styleUrls: ['./receipt-container.component.css'],
})
export class ReceiptContainerComponent implements OnInit {
  @Input() receipes: Recipe[] = [];
  @Input() displayType: 'receipts-container' | 'inLine' = 'receipts-container';

  constructor() {}

  ngOnInit(): void {
    for (let index = 0; index < this.receipes.length; index++) {
      this.receipes[index].multimedia[0].url = 'data:image/jpeg;base64,'+this.receipes[index].multimedia[0].url
    }
    console.log(this.receipes[2].multimedia[0].url);
  }

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

  traduceImagefrom64Bits(receipe: Recipe) {
  
    return receipe.multimedia[0].url = 'data:image/jpeg;base64,'+receipe.multimedia[0].url
    
  }

}
