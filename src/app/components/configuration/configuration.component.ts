import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  token: string;
  constructor(private configService: ConfigService, private router: Router) {
    this.token = configService.getToken();
  }
  ngOnInit(): void {
  }
  setToken() {
    this.configService.setToken(this.token);
    this.router.navigate(['/']);
  }
  getToken(): string {
    return this.configService.getToken();
  }
  clearToken() {
    if (confirm("Are you sure you want to remove your token?")) {
      this.configService.clearToken();
      this.token = this.configService.getToken();
    }
  }
}
