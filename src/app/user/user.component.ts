import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avator!: string;
  @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter();

  select = output<string>()

  get imagePath() {
    return 'assets/users/' + this.avator;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
