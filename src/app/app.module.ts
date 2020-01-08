import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationManagerModule } from './location-manager/location-manager.module';
import { RouterModule } from '@angular/router';
import { APP_ROUTES, APP_EXTRA_OPTIONS } from './app.routes';
import { LocationAddComponent } from './location-add/location-add.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import {ReactiveFormsModule} from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationAddComponent,
    DashboardComponent,
    ProfileComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AngularOpenlayersModule,
    FormsModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    LocationManagerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
