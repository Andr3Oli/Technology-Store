import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor() { }

  Equipments = [
    {
      id: 1,
      equimentName: "Tablet",
      equimentDetail: "LENOVO",
      equimentPrice: 300,
      equimentImg: "https://p2-ofp.static.pub/fes/cms/2021/10/28/juqs65pgl1gh3dysi7yv1tnvtsiqva364946.png"
    },
    {
      id: 2,
      equimentName: "Smart watch",
      equimentDetail: "F27 FILA",
      equimentPrice: 150,
      equimentImg: "https://www.worten.pt/i/ad43318aaaf849f5c39c7e26397016a573ad7d78.jpg"
    },
    {
      id: 3,
      equimentName: "Smart TV",
      equimentDetail: "LG",
      equimentPrice: 1500,
      equimentImg: "https://www.worten.pt/i/9f7e2e5a7cd790d46fa9244bfee2be07f993c726.jpg"
    },
    {
      id: 4,
      equimentName: "Smartphone",
      equimentDetail: "Samsung",
      equimentPrice: 620,
      equimentImg: "https://images.samsung.com/is/image/samsung/assets/pt/2307/pfs/04-04-ft12-Q5-multitasking-mo-720x540.jpg?$FB_TYPE_J_F_MO_JPG$https://images.samsung.com/is/image/samsung/assets/pt/2307/pfs/04-04-ft12-Q5-multitasking-mo-720x540.jpg?$FB_TYPE_J_F_MO_JPG$"
    },
    {
      id: 5,
      equimentName: "Coluna",
      equimentDetail: "JBL",
      equimentPrice: 300,
      equimentImg: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202103/23/00138545236416____7__640x640.jpg"
    },
    {
      id: 6,
      equimentName: "Portátil Gaming",
      equimentDetail: "ASUS",
      equimentPrice: 1800,
      equimentImg: "https://www.pcdiga.com/blog/wp-content/uploads/2023/02/ASUS_ROG_PORTATEIS-1024x576.jpg"
    }
  ]
}
