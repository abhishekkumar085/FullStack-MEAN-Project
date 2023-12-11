import { Component } from '@angular/core';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { lengha_page1 } from 'src/Data/LehngaCholi/lehngaCholi';
import { menJeans } from 'src/Data/Men/men_jeans';
import { mensShoesPage1 } from 'src/Data/MenShoes/menshoes';
import { mens_kurta } from 'src/Data/MensKurta/mensKurta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
menJeans:any
womenGouns:any;
lehngaCholi:any;
mensKurta:any;
mensShoes:any;

ngOnInit(){
  this.menJeans=menJeans.slice(0,4);
  this.womenGouns=gounsPage1.slice(0,5);
  this.lehngaCholi=lengha_page1.slice(0,5);
  this.mensKurta=mens_kurta.slice(0,5);
  this.mensShoes=mensShoesPage1.slice(0,5);

}
}
