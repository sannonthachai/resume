import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  isPrinting:boolean = false;

  constructor(private router: Router) { }

  printDocument() {
    this.isPrinting = true;
    this.router.navigate(['print'])
  }

  onDataReady() {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate([])
    })
  }
}
