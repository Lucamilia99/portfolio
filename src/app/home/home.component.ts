import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['Full-Stack', 'WEB'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };

    // metodo usato in html per il cambio nome
    let typed = new Typed('.typed', options);
    typed.reset(true)
  }

}
