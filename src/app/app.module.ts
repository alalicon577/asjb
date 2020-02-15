import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MyContentComponent} from '../app/mycontent/mycontent';
import {HomePageComponent} from '../app/home/home';
import {MyGroupComponent} from '../app/mygroup/mygroup';
import {FooterComponent} from '../app/footer/footer';
import { AppRoutingModule }     from './app.app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
declare var require: any;

@NgModule({
  imports: [
    BrowserModule,NgbModule.forRoot(), FormsModule, AngularFontAwesomeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,MyContentComponent,HomePageComponent,MyGroupComponent,FooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }