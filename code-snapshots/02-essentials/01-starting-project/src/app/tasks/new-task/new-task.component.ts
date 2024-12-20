import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Task {
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<Task>();
  newTask: Task = {
    title: '',
    summary: '',
    dueDate: '',
  };
}
