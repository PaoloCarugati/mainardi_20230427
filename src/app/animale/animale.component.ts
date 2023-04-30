import { Component, Input } from '@angular/core';
import { Animale } from '../modells/animal.model';

@Component({
  selector: 'app-animali',
  templateUrl: './animale.component.html',
  styleUrls: ['./animale.component.css']
})
export class AnimaliComponent {
  @Input() animali:Animale;

  

}