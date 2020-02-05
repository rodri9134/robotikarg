import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public contactoForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.contactoForm = formBuilder.group({

      email: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      motivo: ['', [Validators.required]]
    });

   }

  ngOnInit() {
  }
  contacto() {


  }


}
