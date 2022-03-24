import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationDTO } from 'src/app/DTOs/LocationDTO';
import { LocationService } from 'src/app/shared/location.service';
// import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location:any=[];
  loading: boolean = false;
  cols: any[]=[];
  exportColumns: any[]=[];
  constructor(private httpClient:HttpClient,private locationservice:LocationService) {
   }

  ngOnInit(): void {
    this.loading=true;
    this.GetLocations();
    this.loading=false;

    this.cols = [
      { field: 'locationId', header: 'Location ID', customExportHeader: 'LocationID' },
      { field: 'streetAddress', header: 'Street Address' },
      { field: 'postalCode', header: 'Postal Code' },
      { field: 'city', header: 'City' },
      { field: 'stateProvince', header: 'State Province' },
      { field: 'countryId', header: 'Country Id' }
  ];

  this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }

  GetLocations(){
    this.loading=true;
    this.httpClient.get("http://localhost:5720/api/Location").subscribe(s=>
    this.location=s
    );
    console.log(JSON.stringify(this.location));
    this.loading=false;
    
  }

  
//   exportPdf() {
//     import("jspdf").then(jsPDF => {
//         import("jspdf-autotable").then(x => {
//             const doc = new jsPDF.default(0,0);
//             doc.autoTable(this.exportColumns, this.location);
//             doc.save('location.pdf');
//         })
//     })
// }

// exportExcel() {
//     import("xlsx").then(xlsx => {
//         const worksheet = xlsx.utils.json_to_sheet(this.location);
//         const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
//         const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
//         this.saveAsExcelFile(excelBuffer, "location");
//     });
// }
 

// saveAsExcelFile(buffer: any, fileName: string): void {
//     let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     let EXCEL_EXTENSION = '.xlsx';
//     const data: Blob = new Blob([buffer], {
//         type: EXCEL_TYPE
//     });
//     FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
// }
}
