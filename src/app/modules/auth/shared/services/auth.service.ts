import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateAccount } from '../types/create-account.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  onCreateAccount(payload: ICreateAccount): Observable<any> {
    return this.http.post<any>('users', payload);
  }
}
