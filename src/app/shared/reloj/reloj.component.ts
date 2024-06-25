import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  reloj = '';

  ngOnInit(): void {
    setInterval(() => {
      this.reloj = new Date().toLocaleTimeString();
    }, 1000);
  }
}
