import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './shared/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  name!: string;
  id!: string;
  onSelect(event: string) {
    console.log(event);
    const user = this.users.find((x) => x.id == event);
    this.name = user?.name as string;
    this.id = user?.id as string;
  }
  readValue(event: string) {
    console.log(event);
  }
}
