import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./_user/user.module').then(m => m.UserModule) },
  {path:'**', redirectTo:'auth/login'} // Boş URL'i /login'e yönlendir
  /* { path: 'login', loadChildren: () => import('./_user/user.module').then(m => m.UserModule) },
  { path: 'register', loadChildren: () => import('./_user/user.module').then(m => m.UserModule) }, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
