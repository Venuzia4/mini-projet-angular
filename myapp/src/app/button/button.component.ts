import { Component, Output,Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() className!:string;
  @Input() logo!:string;
  @Output()click:EventEmitter<null>= new EventEmitter<null>();


  onGoogleLoginClicked() {
 console.log("click")
    }



}
