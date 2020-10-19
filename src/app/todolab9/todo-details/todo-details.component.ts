import { Component, OnInit } from '@angular/core';
import { TodoEntry } from '../todo';
import { ListDataService } from '../todo-data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})

export class TodoDetailsComponent implements OnInit {
  public subscription;
  todo_list : TodoEntry[];
  table_data_source: MatTableDataSource<TodoEntry>;
  col_headers = ['ID', 'Name', 'Date', 'Description', 'Delete'];
  
  constructor(
    private liService: ListDataService // inject service
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  }

  ngOnInit(): void {
    this.subscription = this.liService.get().subscribe(msg => {
      this.todo_list = msg;
      this.table_data_source.data = this.todo_list;
    });
    this.table_data_source = new MatTableDataSource<TodoEntry>(this.todo_list);
  }

  public delete_todo(i: number): void {
    this.liService.remove(i);
  }
}
