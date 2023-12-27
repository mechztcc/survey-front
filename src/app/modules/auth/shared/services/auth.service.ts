import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateAccount } from '../types/create-account.interface';
import { ICreateSession } from '../types/create-session.interface';
import { IUserCredentials } from '../types/user-credentials.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  onCreateAccount(payload: ICreateAccount): Observable<any> {
    return this.http.post<any>('users', payload);
  }

  onCreateSession(payload: ICreateSession): Observable<IUserCredentials> {
    return this.http.post<IUserCredentials>('auth', payload);
  }
}
