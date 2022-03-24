

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';


@Injectable({
    providedIn:'root'
})


export class AdminService {
    constructor(private http:HttpClient){

    }


 getMenu() {
    return this.http.get<any>('assets/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }
}