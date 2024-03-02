import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AllDataService } from 'src/app/services/all-data.service';

export interface PeriodicElement {
  //after
  requestNumber: string;
  requestType: string;
  usageType: string;
  price: number;
  area:number;
  //before 
  priceBfor:number;
  areabefor:string;
  typeBefor:string;
  usageTypeBefor:string;
  //derfernce 
  priceDefernce:number

}
@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent  implements OnInit {
   displayedColumns: string[] = 
  ['requestNumber', 'requestType', 'usageType', 'price' ,'area',//after
  'priceBfor','areabefor', 'typeBefor','usageTypeBefor','priceDefernce'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatPaginator) Paginator!:MatPaginator
  @ViewChild( MatSort)Sort!: MatSort
  currentPage: number = 1;

  constructor(private service:AllDataService, public dialog: MatDialog,private router: Router) {}


  ngOnInit(): void {
    this.getAllData(this.currentPage, '',);
  }
  

  getAllData(pageNumber: number, searchQuery: string) {
    this.service.getAllData(pageNumber, searchQuery).subscribe(
      (res: any) => {
        this.dataSource.data = this.mappingTasks(res);
      },
      (error) => {
        // Handle error
      }
    );
  }

  mappingTasks(Request: any[]): PeriodicElement[] {
    if (!Request|| !Array.isArray(Request)) {
      console.error('Data is undefined or not an array.', Request);
      return []; 
    }
    return Request.map((item: any) => {
      return {
        //data after
        requestNumber: item.after.requestNumber,
        requestType: item.after.requestType,
        usageType: item.after.usageType,
        price:item.after.price,
        area:item.after.area,
        //dataBefore
        priceBfor:item.before.priceBfor,
        areabefor:item.before.areabefor,
        typeBefor:item.before.typeBefor,
        usageTypeBefor:item.before.usageTypeBefor,
        //deference price 
        priceDefernce:item.priceDefernce,


      };
    });
  }
  
  
  search(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // Update the search query and call getAllData with the new search query
    this.getAllData(this.currentPage, filterValue);
  }


  onpagechange(pagenumber: number) {
    // Update the current page and call getAllData with the new page number
    this.currentPage = pagenumber;
    // Assuming you don't want to perform a search when changing the page, provide an empty search query
    this.getAllData(this.currentPage, '');
  }
}