import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  firstname:any;
  lastname:any;
  email:any;
  number:any;
  password:any;
  address:any;
  gender:any;
  birthdate:any;
  postal:any;
  country:any;
  selectIndex:any;
  selectObj:any;

  submitButton = true;
  updateButton = false;

  alert = false;
  data:any = [];

  submit(){
    let obj = {
      firstname : this.firstname,
      lastname: this.lastname,
      email: this.email,
      number: this.number,
      password: this.password,
      address: this.address,
      gender: this.gender,
      birthdate: this.birthdate,
      postal: this.postal,
      country: this.country,
    }

    this.alert = true;
    this.data.push(obj);
    
    this.clear();
    console.log("Submitted: ", this.data);
  }

  clear(){
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.number = "";
    this.password = "";
    this.address = "";
    this.gender = "";
    this.birthdate = "";
    this.postal = "";
    this.country = "";
  }

  delete(index:any){
    this.data.splice(index,1);
    console.log("Deleted Row:", index);
    this.clear();
    
    this.submitButton = true;
    this.updateButton = false;
  }

  edit(index:any, editobj:any){
    this.selectIndex = index;
    this.selectObj = editobj;

    this.firstname = editobj.firstname;
    this.lastname = editobj.lastname;
    this.email = editobj.email;
    this.number = editobj.number;
    this.password = editobj.password;
    this.address = editobj.address;
    this.gender = editobj.gender;
    this.birthdate = editobj.birthdate;
    this.postal = editobj.postal;
    this.country = editobj.country;

    this.submitButton = false;
    this.updateButton = true;
  }

  update(){
    this.data[this.selectIndex].firstname = this.firstname;
    this.data[this.selectIndex].lastname = this.lastname;
    this.data[this.selectIndex].email = this.email;
    this.data[this.selectIndex].number = this.number;
    this.data[this.selectIndex].password = this.password;
    this.data[this.selectIndex].address = this.address;
    this.data[this.selectIndex].gender = this.gender;
    this.data[this.selectIndex].birthdate = this.birthdate;
    this.data[this.selectIndex].postal = this.postal;
    this.data[this.selectIndex].country = this.country;

    this.submitButton = true;
    this.updateButton = false;

    console.log("Updated Row: ", this.firstname);
    console.log("Updated Row: ", this.lastname);
    console.log("Updated Row: ", this.email);
    console.log("Updated Row: ", this.number);
    console.log("Updated Row: ", this.password);
    console.log("Updated Row: ", this.address);

    console.log("Updated Row: ", this.gender);
    console.log("Updated Row: ", this.birthdate);
    console.log("Updated Row: ", this.postal);
    console.log("Updated Row: ", this.country);
    this.clear();
  }
}
