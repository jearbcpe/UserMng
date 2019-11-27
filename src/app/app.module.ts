import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './component/main-menu/main-menu.component';
import { DashboardComponent } from './component/home/dashboard/dashboard.component';
import { SearchComponent } from './component/comj/search/search.component';
import { StatComponent } from './component/report/stat/stat.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { NewComjComponent } from './component/comj/new-comj/new-comj.component';
import { ModalDetailComponent } from './component/comj/modal-detail/modal-detail.component';
import { DDLDivnComponent } from './component/master/ddl-divn/ddl-divn.component';
import { UserComponent } from './component/msc/user/user.component';


const appRoutes: Routes = [
  { path: '' , component : DashboardComponent},
  { path: 'home/dashboard' , component : DashboardComponent},
  { path: 'comj/search' , component : SearchComponent},
  { path: 'report/stat' , component : StatComponent},
  { path: 'msc/user' , component : UserComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    SearchComponent,
    StatComponent,
    DashboardComponent,
    BreadcrumbComponent,
    NewComjComponent,
    ModalDetailComponent,
    DDLDivnComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
