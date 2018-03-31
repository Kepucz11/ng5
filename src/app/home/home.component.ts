import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  btnDelete: string = 'Delete item';
  goalText: String = 'First goal';
  goals = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = "";
    this.itemCount = this.goals.length;
  }

  deleteItem(goal: string) {
    const index: number = this.goals.indexOf(goal);
    if (index !== -1) {
      this.goals.splice(index, 1);
      this.itemCount--;
    }
  }
}
