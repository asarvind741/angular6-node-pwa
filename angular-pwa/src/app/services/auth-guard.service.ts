import { CanLoad } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';



export class AuthGuard {

    canLoad(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        console.log("test")
        return true;
    }
}