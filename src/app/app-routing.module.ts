import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'app', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'password-reset', loadChildren: './pages/password-reset/password-reset.module#PasswordResetPageModule' },
  { path: 'logout', loadChildren: './pages/logout/logout.module#LogoutPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
