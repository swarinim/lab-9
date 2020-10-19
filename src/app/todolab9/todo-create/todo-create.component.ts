import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../todo-data.service';
import { TodoEntry } from '../todo';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  
  newtitle = ''
  newdate  = ''
  newdesc  = ''
  
  ngOnInit() {}
  constructor(
    private liService: ListDataService // inject service
  ) {}

  public add_todo(): void {
    this.liService.put(new TodoEntry(this.newtitle, this.newdate, this.newdesc));
  }
}
