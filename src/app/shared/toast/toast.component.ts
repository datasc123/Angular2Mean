import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() message = { body: '', type: '' };

  setMessage(body, type, time = 3000) {
    this.message.body = body; // capitalizeName(body);
    this.message.type = type; // capitalizeName(type);
    setTimeout(() => { this.message.body = ''; }, time);
  }
}

/*
 * This funcion will capitalize the text variables, but will
 * remove the bootstrap theme from the view (not used anywhere)
*/
export function capitalizeName(name) {
  return name.replace(/\b(\w)/g, s => s.toUpperCase());
}
