import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello/hello.component';

const appRoutes: Routes = [
  { path: '', component: HelloComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    RouterModule.forChild(
      appRoutes
    ),
    BrowserModule
  ],
  providers: []
})
export class AppModule1 { }
