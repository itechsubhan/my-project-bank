import { Component, Input, OnInit } from '@angular/core';
import { bankType } from 'src/types';

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css'],
})
export class TransactionRowComponent implements OnInit {
  @Input() banklist!: bankType;

  constructor() {}

  ngOnInit(): void {}
}
