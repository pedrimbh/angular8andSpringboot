import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
export class Todo {
  constructor(public id: number, public description: string, public isDone: boolean, public targetDate: Date) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [];
  mensage: string;
  // todos = [
  //   new Todo(1, 'Learn java', false, new Date()),
  //   new Todo(2, 'Learn angular', false, new Date()),
  //   new Todo(3, 'worke in Senior', false, new Date()),
  //   new Todo(4, 'Finish dashboard', false, new Date())
  // ];
  // todo = {
  //   id: 1,
  //   descripition: 'Learn java'
  // };
  constructor(private Todoservice: TodoDataService, private router: Router) {}

  ngOnInit() {
    this.refreshTodos();
  }
  refreshTodos() {
    this.Todoservice.todoData('pedrimbh').subscribe(response => {
      console.log(response);
      this.todos = response;
    });
  }
  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.Todoservice.deleteTodo('pedrimbh', id).subscribe(response => {
      console.log(response);
      this.mensage = `Id${id} deletado com successo`;
      this.refreshTodos();
    });
  }
  updateTodo(id) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id]);
  }
}
