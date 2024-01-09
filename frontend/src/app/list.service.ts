import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  baseUrl='http://localhost:3000/'

  getAll():Observable<List[]> {
    return this.http.get<List[]>(`${this.baseUrl}getAll`);
    }

    post(list:List):Observable<List>{
      return this.http.post<List>(`${this.baseUrl}post`,list);
     
     }

     getByid(id:string):Observable<List> {
      return this.http.get<List>(`${this.baseUrl}getById/${id}`)
    }

    update(id:string,list:List):Observable<List> {
      return this.http.put<List>(`${this.baseUrl}update/${id}`,list);
    }

    deleteById(id:string):Observable<List> {
      return this.http.delete<List>(`${this.baseUrl}delete/${id}`)
    } 
    
}
