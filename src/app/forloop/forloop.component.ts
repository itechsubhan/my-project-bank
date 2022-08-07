import { Component, OnInit } from '@angular/core';
import { bankType } from 'src/types';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css'],
})
export class ForloopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // bankList:  string[] = ['1','2'];
  bankList: bankType[] = [
    {
      id: 'BXNMMAXYZ',
      name: 'my-name',
      balance: 50000,
    },
    {
      id: 'ID@22',
      name: 'my-name2',
      balance: 6000,
    },
    {
      id: 'BXNMMAXYZ',
      name: 'my-nam2',
      balance: 5000330,
    },
  ];
}
