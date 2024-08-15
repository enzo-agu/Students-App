import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public students = '../../assets/students.json';
  constructor(public http: HttpClient) { }

  getDatos(): Observable<any> {
    return this.http.get(this.students).pipe();
  }
}
