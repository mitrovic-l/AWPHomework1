import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LangdetectionService {
  private readonly apiUrl = environment.apiUrl+ '/li/v1';

  constructor(private httpClient: HttpClient) { }
}
