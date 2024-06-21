import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avator!: string;
  // @Input({ required: true }) name!: string;

  avator = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => 'assets/users/' + this.avator());

  // get imagePath() {
  //   return 'assets/users/' + this.avator;
  // }

  onSelectUser() {}
}
