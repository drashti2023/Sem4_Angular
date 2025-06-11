import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {
  apiUrl = "https://66ebcc352b6cf2b89c5bb9da.mockapi.io/api/js1/faculties";

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get(this.apiUrl);
  }
  getById(id: any) {
    return this._http.get(this.apiUrl + "/" + id);
  }
  deleteById(id: any){
    return this._http.delete(this.apiUrl + "/" + id);
  }
  addUser(obj: any): Observable<any> {
    return this._http.post<any>(this.apiUrl, obj); 
  }
  
  editUser(id:any,obj:any){
    return this._http.put(this.apiUrl+"/"+id,obj)
  }
}
