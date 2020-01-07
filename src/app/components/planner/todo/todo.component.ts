// import { Component, OnInit } from '@angular/core';
// import { TodoService } from './todo.service';
// import { Todo } from './todo.model';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.scss']
// })
// export class TodoComponent implements OnInit {
//   todoList: Todo[] = [];
//   constructor(private service: TodoService, private builder: FormBuilder) {
//     this.newItemForm = builder.group(new Todo({ title: 'Hello 1', complete: false }));
//   }
//   newItemForm: FormGroup;
//   ngOnInit() {
//     const todo1 = new Todo({ title: 'Hello 1', complete: false });
//     const todo2 = new Todo({ title: 'Hello 2', complete: true });
//     this.service.addTodo(todo1);
//     this.service.addTodo(todo2);
//     this.todoList = this.service.getAllTodos();
//   }

//   onSubmit(): void {
//     this.service.addTodo(this.newItemForm.value);
//   }

//   toggleTodoComplete(todo: Todo): void {

//   }
//   removeTodo(todo: Todo): void {

//   }
// }
