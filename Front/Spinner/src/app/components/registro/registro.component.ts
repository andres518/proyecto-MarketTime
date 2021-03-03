import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;
  load: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: AppService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],     
      password: ['', Validators.required],
    });
  }

  async onSubmit() {


    if (this.form.valid) {

      let data = {
        name: this.form.value.name,
        email: this.form.value.email,
        password: this.form.value.password,
      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/registro', data).subscribe(

        (response: any) => {
          this.route.navigate( ['/']);
          Swal.fire({
            title: 'REGISTRO EXITOSO',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
              },

      
      (error) => {

        console.log(error.status);

      })


    } else {

      console.log("Form error");
    }


  }

}

