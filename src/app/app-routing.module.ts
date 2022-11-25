import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service'; 
import { AuthResolver } from './auth/auth.resolver';

const routes: Routes = [
  
  { path: 'authentication', 
  loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'employee', 
  loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),resolve: { data: AuthResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
