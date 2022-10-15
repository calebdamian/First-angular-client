import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  user: any = {
    username: '',
    password: ''
  }

  login() {
    this.authService.login(this.user).pipe(
      map(token => this.router.navigate(['/auth/user']))
    ).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }
}
