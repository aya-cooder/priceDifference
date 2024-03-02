import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { InvalidCertifcateService } from 'src/app/services/invalid-certifcate.service';
import * as XLSX from 'xlsx';

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
  selector: 'app-invalid-certifcate',
  templateUrl: './invalid-certifcate.component.html',
  styleUrls: ['./invalid-certifcate.component.css']
})
export class InvalidCertifcateComponent implements OnInit {
  displayedColumns: string[] = [
    'requestNumber', 'requestType', 'usageType', 'price', 'area',
    'priceBfor', 'areabefor', 'typeBefor', 'usageTypeBefor', 'priceDefernce'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  currentPage: number = 1;

  constructor(private service: InvalidCertifcateService, public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.getAllData(this.currentPage, '');
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
    // Assuming you don't want to perform a search when changing the page, provide an empty search query
    this.getAllData(this.currentPage, '');
  }

  // onFileChange(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.readFile(file);
  //   }
  // }
                                                           
//   // Method to read data from Excel file
// private readFile(file: File) {
//   const reader = new FileReader();

//     reader.onload = (e: any) => {
//       const binaryString: string = e.target.result;
//       const workbook: XLSX.WorkBook = XLSX.read(binaryString, { type: 'binary' });
  
//       // Assuming the first sheet is the one you want to read
//       const sheetName: string = workbook.SheetNames[0];
//       const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
//       const REQUEST_NUMBER_INDEX = 0;
  
//       const data: (PeriodicElement | null)[] = (XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as (PeriodicElement | null)[])
//       .map((row: any) => {
//         const requestNumber = row[REQUEST_NUMBER_INDEX];
//         if (requestNumber === undefined || requestNumber === '') {
//           console.warn('Row with undefined or empty requestNumber found in Excel');
//           return null;
//         }
    
//         // Find the corresponding row in the dataSource based on requestNumber
//         const existingRow = this.dataSource.data.find((element) => element.requestNumber.trim() === requestNumber.trim());
    
//         // If the corresponding row is found, populate the other properties
//         if (existingRow) {
//           return {
//             requestNumber,
//             requestType: existingRow.requestType || '',
//             usageType: existingRow.usageType || '',
//             price: existingRow.price || 0,
//             area: existingRow.area || 0,
//             typeBefor: existingRow.typeBefor || '',
//             usageTypeBefor: existingRow.usageTypeBefor || '',
//             areabefor: existingRow.areabefor || '',
//             priceBfor: existingRow.priceBfor || 0,
//             priceDefernce: existingRow.priceDefernce || 0,
//             // Add other properties if needed
//           };
//         } else {
//           console.warn(`Row with requestNumber ${requestNumber} not found in dataSource`);
//           return null;
//         }
//       })
//       .filter((row: PeriodicElement | null): row is PeriodicElement => row !== null);
    
//       // Filter out null values
//       const filteredData: PeriodicElement[] = data.filter((row: PeriodicElement | null): row is PeriodicElement => row !== null);
  
//       // Now you can assign filteredData to your dataSource
//       this.dataSource.data = filteredData;
//     };
  
//     reader.readAsBinaryString(file);
//   }
}


  
