import { Component, OnInit, Output } from '@angular/core';
import { VoliService } from '../service/voli-service.service';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.css']
})
export class PageBodyComponent implements OnInit {

  dati1: string
  dati2: string
  dati3: string
  dati4: string 

  constructor(private voliService: VoliService) { }

  ngOnInit(): void {
    this.caricaDati()
  }

  private caricaDati() {
    this.voliService.getVoli().subscribe( (result) => {smista(result)} )
    let smista = (dati) => {
      this.dati1=dati.filter(function(x) {return x.status=="SCHEDULED"})
      this.dati2=dati.filter(function(x) {return x.status=="FLYING"})
      this.dati3=dati.filter(function(x) {return x.status=="CANCELLED"})
      this.dati4=dati.filter(function(x) {return x.status=="ARRIVED"})

      console.log("Aggiornamento dati...")

    }
    setInterval(() => {this.voliService.getVoli().subscribe( (result) => {smista(result)} )}, 45000 )
  }

  cancellaVolo(id: number) {
    this.voliService.cancelVolo(id).subscribe(() => {this.caricaDati()})
    console.log("Cancellato volo: "+id)
  }

}
