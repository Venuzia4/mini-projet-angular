import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted:boolean=false;
  registerForm!: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
      Validators.minLength(2)]],

      lastname: ['', [Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
      Validators.minLength(2),]],

      email: ['', [Validators.required, Validators.email,
      Validators.pattern(
        '\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*'
      )]],

      password: ['', [Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],

				confirmPassword: ['', [Validators.required]],

        phones:this.fb.array([]),
        terms:['',[
          Validators.requiredTrue
        ]]


    },
    { validators: this.Mustmatch('password', 'confirmPassword') });
    this.addPhone();
  }




  get firstName() {
    return this.registerForm.get('firstName');
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

  get phones(){
    return this.registerForm.get('phones')as FormArray;

  }

  get terms() {
    return this.registerForm.get('terms');
  }

  get f() {
		return this.registerForm.controls;
	}

  getPhonePrefix(index:number){
    return this.phones.controls[index].get('phonePrefix')
  }

  getPhoneNumber(index:number){
    return this.phones.controls[index].get('PhoneNumber')
  }


  addPhone(){
    let phone=this.fb.group({
      phonePrefix:'',
      phoneNumber:['',[Validators.required,Validators.minLength(9),Validators.maxLength(9),Validators.pattern('^[0-9]* $')]]
    });
    if(this.phones.length<2){
    this.phones.push(phone)
    console.log(this.phones)
  }}

  deletePhone(index:number){
    this.phones.removeAt(index);
  }

	public Mustmatch(password: string, confirmPassword: string) {
		return (FormGroup: FormGroup) => {
			const passwordcontrol = FormGroup.controls[password];
			const confirmPasswordcontrol = FormGroup.controls[confirmPassword];
			if (
				confirmPasswordcontrol.errors &&
				!confirmPasswordcontrol.errors['Mustmatch']
			) {
				return;
			}
			if (passwordcontrol.value !== confirmPasswordcontrol.value) {
				confirmPasswordcontrol.setErrors({ Mustmatch: true });
			} else {
				confirmPasswordcontrol.setErrors(null);
			}
		};
	}
  onSubmit(): void {
    this.submitted=true;
    this.registerForm.getRawValue();
    console.log(this.registerForm.getRawValue());
  }

}
