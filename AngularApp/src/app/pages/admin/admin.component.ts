import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
// import { TabPanel } from 'primeng/tabview';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  btnClick(event: any) {
    const clickedTab = event;
   //alert(clickedTab);
   debugger;
   console.log(event);
   //filter((element, index) => index === event.index)
   //setHelpKey((clickedTab.content as HelpKeyComponent).helpKey);
    // this.router.navigateByUrl("'/"+urlPath+"'");
  };
}
