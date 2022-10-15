import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    this.authService.loginUser(this.user.username, this.user.password).subscribe(
      (v) => {
        console.log(v);
        this.router.navigate(['/auth/user']);
      }
    );
  }
}
