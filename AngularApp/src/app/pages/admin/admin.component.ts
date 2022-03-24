import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
// import { TabPanel } from 'primeng/tabview';
import {TreeNode} from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  menu: TreeNode[]=[];
    
  subMenu: TreeNode[]=[];

  constructor(private router:Router,private http:HttpClient,private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getMenu().then(files => this.menu = files);
    console.log(JSON.stringify(this.menu));
  }
  
  
  expandAll(){
    this.menu.forEach( node => {
        this.expandRecursive(node, true);
    } );
}

collapseAll(){
    this.subMenu.forEach( node => {
        this.expandRecursive(node, false);
    } );
}

private expandRecursive(node:TreeNode, isExpand:boolean){
    node.expanded = isExpand;
    if (node.children){
        node.children.forEach( childNode => {
            this.expandRecursive(childNode, isExpand);
        } );
    }
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
