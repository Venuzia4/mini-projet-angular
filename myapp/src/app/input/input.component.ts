import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  hide = true;
  @Input() isPassword!: boolean;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type: string = 'text';
  @Output() value: EventEmitter<string> = new EventEmitter<string>();
  @Output() inputEmitter: EventEmitter<string> = new EventEmitter<string>();

  emitInput(input: string) {
    console.log('click ' + input)
    this.inputEmitter.emit(input);
  }

  constructor() {
    this.label = "login";
  }

  ngOnInit(): void {
    this.isPassword = this.type == "password";
  }

  toggleType() {
    this.hide = !this.hide;
    this.type = (this.type == "password") ? "text" : "password";
  }
}
