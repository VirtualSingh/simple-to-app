import { Component, EventEmitter, Input, input, Output } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const random = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: {
    id: string;
    avatar: string;
    name: string;
  };
  // @Input() name!: string;
  @Output() select = new EventEmitter<string>();
  @Input() id!: string;
  @Input() value!: string;
  @Output() valueChange = new EventEmitter<string>();

  // selectedUser = DUMMY_USERS[random];
  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return 'assets/' + this.user.avatar;
  }
  onClick() {
    this.select.emit(this.user.id);
    // let random = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[random];
  }
  updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(target.value);
  }
}
