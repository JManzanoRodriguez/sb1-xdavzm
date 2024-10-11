import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'hotels', component: HotelListComponent },
      { path: 'restaurants', component: RestaurantListComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'admin', component: AdminDashboardComponent }
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HomeComponent,
    HotelListComponent,
    RestaurantListComponent,
    UserProfileComponent,
    AdminDashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }