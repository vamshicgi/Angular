import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationDTO } from '../DTOs/LocationDTO';

@Injectable({
    providedIn:'root'
})


export class LocationService {
    constructor(private http:HttpClient){

    }

    getAllLocatioins() {
        return this.http.get<any>("http://localhost:5720/api/Location")
        .toPromise()
        .then(res => <LocationDTO[]>res.data)
        .then(data => { return data; });
    }
}