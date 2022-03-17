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
  loading: boolean = false;
  constructor(private httpClient:HttpClient,private locationservice:LocationService) {
    //this.GetLocations();
   }

  ngOnInit(): void {
    this.loading=true;
    this.GetLocations();
    this.loading=false;
  }

  GetLocations(){
    this.loading=true;
    this.httpClient.get("http://localhost:5720/api/Location").subscribe(s=>
    this.location=s
    );
    console.log(JSON.stringify(this.location));
    this.loading=false;
    
  }
}
