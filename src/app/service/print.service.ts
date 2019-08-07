import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(private router: Router) { }

  printDocument() {
    this.router.navigate(['print']);
  }

  onDataReady() {
    setTimeout(() => {
      window.print();
    })
  }
}
