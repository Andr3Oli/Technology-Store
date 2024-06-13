import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from '../../services/order-detail.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  constructor(private service: OrderDetailService) {}
  equipmentsData:any;

  ngOnInit(): void{
    this.equipmentsData = this.service.Equipments;

  }

}
