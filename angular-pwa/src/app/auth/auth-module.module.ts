import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { SiginComponent } from 'src/app/auth/sigin/sigin.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    SignupComponent,
    SiginComponent
  ]
})
export class AuthModuleModule { }
