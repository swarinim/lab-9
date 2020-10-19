import { Injectable } from '@angular/core';
import { throws } from 'assert';
import { Subject, Observable } from 'rxjs';
import { TodoEntry } from './todo';

@Injectable({
  providedIn: 'root'
})

export class ListDataService {
  private todoListInternal :TodoEntry[] = [];
  private todoList = new Subject<TodoEntry[]>();
  
  constructor() { }

  public get(): Observable<TodoEntry[]> {
    return this.todoList.asObservable();
  }
  
  public put(value: TodoEntry): void {
    this.todoListInternal.push(value);
    this.todoList.next(this.todoListInternal);
  }

  public clear(): void {
    this.todoListInternal = [];
    this.todoList.next(this.todoListInternal);
  }

  public remove(i: number): void {
    this.todoListInternal.splice(i, 1);
    this.todoList.next(this.todoListInternal)
  }
}