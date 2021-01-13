import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Volo } from '../classes/volo';
import { VoliService } from '../service/voli-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  voli : any[] = []

  @Output()
  cancella: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

}
