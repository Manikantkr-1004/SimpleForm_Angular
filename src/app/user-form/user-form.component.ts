import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm from @angular/forms

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  data: { name: string, email:string,password:string,conpass:string,phone: number | null } =
   { name: "",email:"",password:"",conpass:"",phone:null };

   flag: boolean = false;

  onSubmit(form: NgForm): void {

    if(this.passwordCheck()){
      alert("Your Password is not Strong");
      return;
    }
    if(this.conPassCheck()){
      alert("Confirm password is not matching with Password");
      return;
    }
    if (form.valid) {
      console.log(this.data);
      this.flag = true;
    }
  }

  passwordCheck(): boolean{
    if(this.data.password!==""){
      const length= this.data.password.length>=6, hasUpperCase = /[A-Z]/.test(this.data.password), hasLowerCase = /[a-z]/.test(this.data.password), hasDigit = /\d/.test(this.data.password), hasSpecialChar = /[!@#$%^&*]/.test(this.data.password);
      
      if(length && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar){
        return false;
      }else{
        return true;
      }
    }
    return false;
  }

  conPassCheck(): boolean{
    if(this.data.conpass!==""){
      if(this.data.password=== this.data.conpass){
        return false;
      }else{
        return true;
      }
    }

    return false;
  }

}
