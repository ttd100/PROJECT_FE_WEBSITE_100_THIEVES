import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {SignUpForm} from '../../model/SignUpForm';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    form: any = {};
    status = 'Please fill in the form to create account!';
    signUpForm: SignUpForm;
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email
    ]);
    hide: boolean;

    ngOnInit(): void {
    }

    register() {
        this.signUpForm = new SignUpForm(
            this.form.name,
            this.form.username,
            this.form.email,
            this.form.password
        );
        this.authService.signUp(this.signUpForm).subscribe(data => {
                console.log('data=>', data);
                if (data.message === 'nouser') {
                    this.status = 'Username is existed! Please try again!';
                }
                if (data.message === 'noemail') {

                    this.status = 'email is existed! please try again!';
                }
                if (data.message === 'Create_success!!!') {
                    this.status = 'create account success!';
                }
            },
            error => {
                console.log('error', error);
                this.status = 'email invalid! Please try again!';
            });
    }
}
