import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [];
  constructor(private service: TodoService) { }

  ngOnInit() {
    const todo1 = new Todo({ title: 'Hello 1', complete: false });
    const todo2 = new Todo({ title: 'Hello 2', complete: true });
    this.service.addTodo(todo1);
    this.service.addTodo(todo2);
    this.todoList = this.service.getAllTodos();
  }

  toggleTodoComplete(todo: Todo): void {

  }
  removeTodo(todo: Todo): void {

  }
}
