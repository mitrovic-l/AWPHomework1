import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit{
  token: string;
  constructor(private configService: ConfigService) { 
    this.token = configService.getToken();
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  setToken() {
    this.configService.setToken(this.token);
  }
  getToken(): string {
    return this.configService.getToken();
  }
  clearToken() {
    console.log("BRISEM TOKEN?");
    this.configService.clearToken();
    this.token = this.configService.getToken();
  }
}
