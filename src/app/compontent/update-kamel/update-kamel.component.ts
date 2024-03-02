import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-update-kamel',
  templateUrl: './update-kamel.component.html',
  styleUrls: ['./update-kamel.component.css'],
  animations: [
    trigger('fadeInOutAnimation', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(500)),
    ]),
  ],
})
export class UpdateKamelComponent implements OnInit {
  FileUPloadurl = "http://10.100.102.52:5000/api/Request/updatedKamel";
  file: any;
  flag = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  selectfile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  upload() {
    if (!this.file) {
      console.error("No file selected!");
      return;
    }

    let formData = new FormData();
    formData.append('file', this.file);
    this.flag = false;

    this.http.post(this.FileUPloadurl, formData).subscribe(
      (data: any) => {
        console.log(data);
        this.flag = true;
        alert(data.message);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
