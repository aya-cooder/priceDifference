import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CompontentComponent } from './compontent/compontent.component';
import { HeaderComponent } from './compontent/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './compontent/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './compontent/login/login.component';
import { RegisterComponent } from './compontent/register/register.component';
import { HomeComponent } from './compontent/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from'@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import{MatListModule}from'@angular/material/list';
import{MatButtonModule} from'@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListsComponent } from './compontent/lists/lists.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './compontent/footer/footer.component';
import { ContentUsComponent } from './compontent/content-us/content-us.component';
import { InvalidCertifcateComponent } from './compontent/invalid-certifcate/invalid-certifcate.component';
import { ValidCertifcateComponent } from './compontent/valid-certifcate/valid-certifcate.component';
import { AllDataComponent } from './compontent/all-data/all-data.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { PaginationComponent } from './compontent/pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationDirective } from './directives/pagination.directive';
import { NgxSpinnerModule } from "ngx-spinner";
import { UpdateKamelComponent } from './compontent/update-kamel/update-kamel.component';



@NgModule({
  declarations: [
    AppComponent,
    CompontentComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ListsComponent,
    FooterComponent,
    ContentUsComponent,
    InvalidCertifcateComponent,
    ValidCertifcateComponent,
    AllDataComponent,
    PaginationComponent,
    PaginationDirective,
    UpdateKamelComponent,
   
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule,
    ToolbarModule ,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule ,
    MatListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,MatTableModule,
    HttpClientModule,MatDialogModule,
    FlexLayoutModule, MatCardModule ,
    NgxPaginationModule,  
    NgxSpinnerModule.forRoot({ type: 'ball-circus' }),
   

  ],
 
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
