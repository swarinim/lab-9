import { Component, OnInit } from '@angular/core';
import { TodoEntry } from '../todo';

import { ListDataService } from '../todo-data.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public subscription;
  todo_list : TodoEntry[];
  
  constructor(
    private liService: ListDataService // inject service
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  }