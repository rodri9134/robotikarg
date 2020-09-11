import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
 // public contactoForm: FormGroup;
  swal: any;
  contactoForm: FormGroup;
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, public messageService: MessageService, private formBuilder: FormBuilder, private builder: FormBuilder) {
   this.contactoForm = formBuilder.group({

    Fullname: new FormControl ('', [Validators.required]),
    Email: new FormControl ('', [Validators.compose ([Validators.required, Validators. email])]),
    Comment: new FormControl ('', [Validators.required])
    });

  }

  ngOnInit() {

  }

  enviarContacto(form) {
    this.messageService.sendMessage(form.value).subscribe(() => {
      // alert('Mensaje enviado correctamente');
       console.log('Mensaje enviado correctamente');
       this.router.navigate(['/']);
    });
  }


}


