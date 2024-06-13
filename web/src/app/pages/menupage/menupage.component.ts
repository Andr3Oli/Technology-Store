import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailService } from '../../services/order-detail.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrl: './menupage.component.css'
})
export class MenupageComponent implements OnInit{

  constructor(private param:ActivatedRoute, private service:OrderDetailService) {}
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id')
    if(this.getMenuId){
      this.menuData = this.service.Equipments.filter((value)=>{
        return value.id==this.getMenuId;
      })
    }
  }
}
