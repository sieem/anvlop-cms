import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { FormService } from '../../services/form.service';
import { ApiService } from '@anvlop/ui/shared';

@Component({
  selector: 'anvlop-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public formService: FormService,
    private auth: AuthService,
    private toastr: ToastrService,
    private api: ApiService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.formService.emailRegex)]],
      password: ['', [Validators.required/* , Validators.pattern(this.formService.passwordRegex */]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.toastr.error('Invalid login');
      return;
    }

    this.loginUser();
  }

  loginUser() {

    const body = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.api.post<any>('login', body).subscribe(
      (res: any) => {
        this.auth.saveToken(res.access_token);
        this.router.navigate(['/']);
      },
      err => this.toastr.error(err.error, `Error ${err.status}: ${err.statusText}`)
    )
  }

}