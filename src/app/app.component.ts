import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './bootstrap.min.css']
})
export class AppComponent {
  title = 'ProjForms';
  cliente: Cliente = new Cliente();
  salvar(){
    console.log(this.cliente);
  }
  
}
