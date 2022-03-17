import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationDTO } from 'src/app/DTOs/LocationDTO';
import { LocationService } from 'src/app/shared/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location:any=[];
  
  constructor(private httpClient:HttpClient,private locationservice:LocationService) {
    //this.GetLocations();
   }

  ngOnInit(): void {
    this.GetLocations();
  }

  GetLocations(){
    debugger;
    this.httpClient.get("http://localhost:5720/api/Location").subscribe(s=>
    this.location=s
    );
    console.log(JSON.stringify(this.location));
    
  }
}
