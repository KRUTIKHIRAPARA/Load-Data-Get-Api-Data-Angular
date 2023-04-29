import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client'; 
// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
 
// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ApiGetDataComponent } from './api-get-data/api-get-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiGetDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatProgressBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
