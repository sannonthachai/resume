import { Component, OnInit } from '@angular/core';
import { PrintService } from '../service/print.service'

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor(private printService: PrintService) { }

  ngOnInit() {
    this.printService.onDataReady();
  }

}
