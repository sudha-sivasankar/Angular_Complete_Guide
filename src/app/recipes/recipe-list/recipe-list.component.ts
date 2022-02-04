import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Crispy Calamari Rings Recipe"
    ,"A quick and easy snack recipe, calamari rings are basically squid rings deep fried in tempura batter and served hot and crispy alongside parsley sprig and thai chilli sauce."
    ,"assets/Images/Crispy Calamari Rings Recipe.jpg"),
    new Recipe("Masala Vada (Chana Dal Vada) Recipe"
    ,"Masala Vada, a crispy and savory deep fried fritter made from chana dal and spices, is a popular street food of South Indian cuisine."
    ,"assets/Images/Masala Vada Recipe.jpg"),
    new Recipe("Egg sandwich recipe"
    ,"Egg sandwich made of boiled eggs, caramelized onions and spice powders. These egg sandwiches are easy to make when you have some boiled eggs in hand. Serve these for a breakfast or dinner."
    ,"assets/Images/Egg sandwich recipe.jpg")
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
