import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location:any;
  constructor(private httpClient:HttpClient) {
    this.GetLocations();
   }

  ngOnInit(): void {
    this.GetLocations();
  }

  GetLocations(){
    this.httpClient.get("http://localhost:5720/api/Location").subscribe(s=>
    this.location=s
    );
  }
}
