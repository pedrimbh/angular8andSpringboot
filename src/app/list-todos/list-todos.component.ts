import { Component, OnInit } from '@angular/core';
export class Todo {
  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn java', false, new Date()),
    new Todo(2, 'Learn angular', false, new Date()),
    new Todo(3, 'worke in Senior', false, new Date()),
    new Todo(4, 'Finish dashboard', false, new Date())
  ];
  // todo = {
  //   id: 1,
  //   descripition: 'Learn java'
  // };
  constructor() {}

  ngOnInit() {}
}
