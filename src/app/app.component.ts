import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  sendRequest1() {
    this.http.get('https://api.example.com/endpoint1').subscribe(response => {
      console.log('Response from endpoint1:', response);
    }, error => {
      console.error('Error from endpoint1:', error);
    });
  }

  sendRequest2() {
    this.http.get('https://api.example.com/endpoint2').subscribe(response => {
      console.log('Response from endpoint2:', response);
    }, error => {
      console.error('Error from endpoint2:', error);
    });
  }
}
