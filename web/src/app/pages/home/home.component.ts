import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from '../../services/order-detail.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private service: OrderDetailService) {}
  equipmentsData:any;

  ngOnInit(): void{
    this.equipmentsData = this.service.Equipments;

  }
}
