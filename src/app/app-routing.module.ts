import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ForloopComponent } from './forloop/forloop.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'transactions', component: ForloopComponent },
  { path: '**', component: ErrorPageComponent },
];

// const routes: Routes = [
//   { path: '', component: DemoComponent },
//   { path:'products', component:ProductListComponent },
//   { path:'checkout', component: CheckoutComponent },
//   { path:'**', component: ErrorPageComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
