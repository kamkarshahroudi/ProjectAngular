import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ItemToDoList } from '../model/ItemToDoList';


@Injectable({
    providedIn: 'root',
  })
  export class ServiceToDoList {
    [x: string]: any;
    constructor(private http: HttpClient) {}
    httpHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
         
        }),
      };
 
    GetAllToDoList() :Observable<ItemToDoList[]>{ 
        return this.http.get<ItemToDoList[]>(environment.ToDoListAPIUrl+'api/ToDoList/GetAllToDoList',this.httpHeader)
      }
     
      deleteToDoList(Id?:string): Observable<string>  {
      
        return this.http.delete<string>(environment.ToDoListAPIUrl+'api/ToDoList/DeleteToDoList?id='+Id?.toString(),this.httpHeader)
      }
      EditToDoList(id: number,ToDoList?:ItemToDoList): Observable<ItemToDoList>{
        return this.http.put<ItemToDoList>(environment.ToDoListAPIUrl+'api/ToDoList/EditeToDoList?id='+id,ToDoList,this.httpHeader)
      }
      InsertToDoList(ToDoList?:ItemToDoList): Observable<ItemToDoList>{
        return this.http.post<ItemToDoList>(environment.ToDoListAPIUrl+'api/ToDoList/Insert',ToDoList,this.httpHeader)
      }
}