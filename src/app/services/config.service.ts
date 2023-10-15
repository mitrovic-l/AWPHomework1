import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private token: string;

  constructor() { 
    this.token = '';  
  }
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', this.token); 
  }
  getToken(): string {
    let localToken = localStorage.getItem('token');
    if (localToken === null){
      return ''
    }
    return localToken;
  }
  clearToken() {
    this.token = '';
    localStorage.removeItem('token');
  }
}
