import { Component } from '@angular/core';
import { PrintService } from './service/print.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume';

  constructor(private printService: PrintService) {}

  onPrint() {
    this.printService.printDocument();
  }
}
