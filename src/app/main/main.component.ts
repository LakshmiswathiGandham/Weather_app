import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Info } from '../info';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


 city_name="Delhi"
 info:any;
 
  constructor( private http:HttpClient ) {
    
   }

  ngOnInit(): void {
  }
  

  
  displayweatherdata(event:any){
    var weatherurl="https://api.openweathermap.org/data/2.5/weather?q="+this.city_name+"&appid=bb58aeca0819b69874ed5b2c674d3b05";
    
     this.http.get(weatherurl).subscribe(data=>
      {  
        
           this.info= data;
      }
     );
  };
}




 
 
