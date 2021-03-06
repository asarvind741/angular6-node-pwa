import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { SiginComponent } from 'src/app/auth/sigin/sigin.component';
import { ActivateComponent } from './activate/activate.component';

const routes: Routes = [{
  path: 'signup', component: SignupComponent
},
{
  path: 'signin', component: SiginComponent
},
{
  path: 'activate/:token', component: ActivateComponent
}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
