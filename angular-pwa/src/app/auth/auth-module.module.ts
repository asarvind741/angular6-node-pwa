import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { SiginComponent } from 'src/app/auth/sigin/sigin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService1 } from 'src/app/shared/auth.service';
import { from } from 'rxjs/internal/observable/from';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    SignupComponent,
    SiginComponent
  ],
  providers: [
    AuthService1
  ]
})
export class AuthModuleModule { }
