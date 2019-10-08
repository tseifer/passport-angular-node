import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { GoogleChartModule } from './google-chart/google-chart.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RootComponent } from './root/root.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GoogleChartModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
