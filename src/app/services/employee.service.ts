
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private URL: string;

  constructor(private _http: HttpClient) {
    this.URL = Environment.URL;
  }

    addEmployee(data: any): Observable<any> {
      return this._http.post(this.URL + 'employees',data);
    }

    updateEmployee(id: number, data: any): Observable<any> {
      return this._http.put(this.URL + 'employees/'+id,data);
    }

    getEmployeeList(): Observable<any> {
      return this._http.get(this.URL+'employees');
    }
    
    deleteEmployee(id: number): Observable<any>{
      return this._http.delete(this.URL + 'employees/'+id)
    }
}
