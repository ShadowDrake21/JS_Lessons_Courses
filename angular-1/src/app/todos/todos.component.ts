import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodosService } from '../shared/todos.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public loading: boolean = true;
  public seachString = '';

  constructor(public todosService: TodosService) {}
  ngOnInit(): void {
    this.todosService
      .fetchTodos()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false;
      });
  }

  onChange(id: number) {
    // this.onToggle.emit(id);
    this.todosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }
}
