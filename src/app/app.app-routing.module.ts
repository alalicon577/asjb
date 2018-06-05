import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyContentComponent} from '../app/mycontent/mycontent';
import {HomePageComponent} from '../app/home/home';
import {MyGroupComponent} from '../app/mygroup/mygroup';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'homepage', component: HomePageComponent },
    { path: 'mygroup', component: MyGroupComponent },
    { path: 'mycontent', component: MyContentComponent }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}