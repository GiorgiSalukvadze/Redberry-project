import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GuardGuard } from './cores/guard.guard';
import { DetailsComponent } from './features/list/details/details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./features/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./features/form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'laptop',
    loadChildren: () =>
      import('./features/laptop/laptop.module').then((m) => m.LaptopModule),
    canLoad: [GuardGuard],
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./features/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
