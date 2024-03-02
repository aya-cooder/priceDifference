import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ValidCertifcateService } from 'src/app/services/valid-certifcate.service';

export interface PeriodicElement {
  requestNumber: string;
  requestType: string;
  usageType: string;
  price: number;
  area: number;
  priceBfor: number;
  areabefor: string;
  typeBefor: string;
  usageTypeBefor: string;
  priceDefernce: number;
}

@Component({
  selector: 'app-valid-certifcate',
  templateUrl: './valid-certifcate.component.html',
  styleUrls: ['./valid-certifcate.component.css']
})
export class ValidCertifcateComponent implements OnInit {
  displayedColumns: string[] = ['requestNumber', 'requestType', 'usageType', 'price', 'area', 'priceBfor', 'areabefor', 'typeBefor', 'usageTypeBefor', 'priceDefernce'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  currentPage: number = 1;
  totalItems: number = 0;

  constructor(private service: ValidCertifcateService, public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.getAllData(this.currentPage, '');
  }

  getAllData(pageNumber: number, searchQuery: string) {
    this.service.getAllData(pageNumber, searchQuery).subscribe(
      (res: any) => {
        this.dataSource.data = this.mappingTasks(res);
        this.totalItems = res.totalItems; // Set totalItems property
      },
      (error) => {
        // Handle error
      }
    );
  }

  mappingTasks(Request: any[]): PeriodicElement[] {
    if (!Request || !Array.isArray(Request)) {
      console.error('Data is undefined or not an array.', Request);
      return [];
    }
    return Request.map((item: any) => {
      return {
        requestNumber: item.after.requestNumber,
        requestType: item.after.requestType,
        usageType: item.after.usageType,
        price: item.after.price,
        area: item.after.area,
        priceBfor: item.before.priceBfor,
        areabefor: item.before.areabefor,
        typeBefor: item.before.typeBefor,
        usageTypeBefor: item.before.usageTypeBefor,
        priceDefernce: item.priceDefernce,
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
    this.getAllData(this.currentPage, '');
  }
}
