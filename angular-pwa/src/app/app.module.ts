import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TypicodeInterceptor } from 'src/app/services/http.interceptor';
// import { PreloadAllModules } from '@angular/router';
// import { NoPreloading } from '@angular/router';


const routes: Routes = [{
  path: '', component: HomeComponent, pathMatch: "full"
},
{
  path: 'auth', loadChildren: './auth/auth-module.module#AuthModuleModule', canLoad: [AuthGuard]
},
{
  path: 'posts', loadChildren: './posts/posts.module#PostModule', canLoad: [AuthGuard]
},
{
  path: '**', redirectTo: ''
}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes
      // , { preloadingStrategy: NoPreloading }
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ 
    AuthGuard,
    AuthService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TypicodeInterceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
