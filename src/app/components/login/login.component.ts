import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../authentication/auth.service'
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule, MatIconModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public passwordVisible: Boolean = false;
  public login: string = '';
  public password: string = '';
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private _authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]  
    });
  }

  onSubmit(event: NgForm) {
    console.log(event)
      this._authService.login(this.login, this.password);
    
  }
}
