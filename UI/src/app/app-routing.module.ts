import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { ApprovestoryComponent } from './admin/approvestory/approvestory.component';
import { CategoryComponent } from './admin/category/category.component';
import { ErrorComponent } from './error/error.component';
import { GoogleComponent } from './google/google/google.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuradService } from './services/auth-gurad.service';
import { PoststoryComponent } from './user/poststory/poststory.component';
import { ReadstoriesComponent } from './user/readstories/readstories.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'readstories',
    component: ReadstoriesComponent,
    canActivate : [AuthGuradService]
  },
  {
    path: 'poststory',
    component: PoststoryComponent,
    canActivate: [AuthGuradService]
  },
  {
    path: 'approvestory',
    component: ApprovestoryComponent,
    canActivate: [AuthGuradService],
    data: {hasRole : 'Admin'}
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthGuradService],
    data: { hasRole: 'Admin' }
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'accessdenied', component: AccessdeniedComponent },
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  }, { path: 'google', component: GoogleComponent },
  {
    path: '**',
    component: ErrorComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
