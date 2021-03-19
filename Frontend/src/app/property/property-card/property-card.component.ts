import { Component } from '@angular/core';

@Component({
  selector:'app-card-property',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
}
)
export class PropertyCardComponent{
  property:any ={
    "id":1,
    "name":"Usama",
    "type":"House",
    "price":12000
  }

}
