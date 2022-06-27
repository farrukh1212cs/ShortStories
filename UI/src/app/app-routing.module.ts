import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovestoryComponent } from './admin/approvestory/approvestory.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PoststoryComponent } from './user/poststory/poststory.component';
import { ReadstoriesComponent } from './user/readstories/readstories.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'readstories',
    component: ReadstoriesComponent
  },
  {
    path: 'poststory',
    component: PoststoryComponent
  },
  {
    path: 'approvestory',
    component: ApprovestoryComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
