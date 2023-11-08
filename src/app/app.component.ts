import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private apiService: ApiService
  ) {}
  title = 'Fyle_internshi-Project';
}
