import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baggage-tracking',
  templateUrl: './baggage-tracking.component.html',
  styleUrls: ['./baggage-tracking.component.scss']
})
export class BaggageTrackingComponent implements OnInit {
  popover = {
    content: 'Penyebab keterlambatan?',
    title: 'Barang terlambat'
  };

  constructor() { }

  ngOnInit() {
  }

}
