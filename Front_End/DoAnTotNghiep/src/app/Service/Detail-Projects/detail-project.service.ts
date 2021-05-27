import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailProjectService {
  private Url = "https://localhost:44341/api/detailProjects";
  constructor(private _http: HttpClient) { }
  getallDetail_Project() {
    return this._http.get(`${this.Url}`);
  }
}
