import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstname:['',[Validators.required,
        Validators.pattern('[a-zA-Z]+$'),
        Validators.minLength(2)]],

      lastname:['',[Validators.required,
        Validators.pattern('[a-zA-Z]+$'),
        Validators.minLength(2),]],

      email:['',[Validators.required,		Validators.email,
        Validators.pattern(
          '\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*'
        )]],

      password:['',[Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],




    })

  }


  get firstname() {
		return this.registerForm.get('firstname');
	}

	get lastname() {
		return this.registerForm.get('lastname');
	}

	get email() {
		return this.registerForm.get('email');
	}

	get password() {
		return this.registerForm.get('password');
	}



  onSubmit():void{
    this.registerForm.getRawValue();
    console.log(this.registerForm.getRawValue());
  }

}
