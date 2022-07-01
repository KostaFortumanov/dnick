import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {TokenService} from "../service/token.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {

    constructor(
        private tokenService: TokenService,
        private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let currentUser = this.tokenService.getUser();
        if (currentUser) {
            return true;
        }

        let url = state.url;
        this.router.navigate(['/auth/login'], {queryParams: {redirectTo: url}});
        return false;
    }
}
