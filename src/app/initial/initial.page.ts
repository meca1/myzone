import { Component, OnInit } from '@angular/core';
import { createAotCompiler } from '@angular/compiler';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})
export class InitialPage implements OnInit {
  item ="../assets/icon/cara.png"
  slideOpts = {
    effect: 'flip'}
  constructor() { }

  ngOnInit() {
  }

}
