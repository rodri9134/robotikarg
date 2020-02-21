import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public contactoForm: FormGroup;
  swal: any;
  constructor(private router: Router, private messageService: MessageService, private formBuilder: FormBuilder) {
    this.contactoForm = formBuilder.group({

      email: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      motivo: ['', [Validators.required]]
    });

  }

  ngOnInit() {
  }
  contacto(contacto) {
    this.messageService.sendMessage(contacto).subscribe(() => {
      // alert('Mensaje enviado correctamente');
      console.log('Mensaje enviado correctamente');
      this.router.navigate(['/']);
    });
  }


}


