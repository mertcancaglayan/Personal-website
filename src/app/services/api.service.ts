import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileData } from '../models/ProfileData.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '';

  constructor(private http: HttpClient) {}

  getData(): Observable<ProfileData> {
    return this.http.get<ProfileData>(this.apiUrl);
  }
}
