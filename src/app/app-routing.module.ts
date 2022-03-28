import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClinicComponent } from './clinic/add-clinic/add-clinic.component';
import { EditClinicComponent } from './clinic/edit-clinic/edit-clinic.component';
import { ViewTableComponent } from './view-table/view-table.component';

const routes: Routes = [
  // { path: 'home' },
  // { path: 'register' },
  // { path: 'login' },
  // { path: 'about' },
  { path: 'doctors', component: ViewTableComponent },
  { path: 'patients', component: ViewTableComponent },
  // { path: 'reciptionists' },
  { path: 'medicines', component: ViewTableComponent },
  // { path: 'mediciens' },
  { path: 'appointments', component: ViewTableComponent },
  { path: 'prescriptions', component: ViewTableComponent },
  { path: 'appointments', component: ViewTableComponent },
  { path: 'clinics', component: ViewTableComponent },
  { path: 'clinics/add', component: AddClinicComponent },
  { path: 'clinics/edit/:id', component: EditClinicComponent },
  // { path: '**' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
