import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public tasks: string[] = [];
  public newTask: string = '';
  public editingIndex: number | null = null;
  public editTaskText: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    }
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask);
      this.newTask = '';

      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }

  deleteTask(task: string) {
    this.tasks = this.tasks.filter((t) => t !== task);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
  editTask(index: number) {
    this.editingIndex = index;
    this.editTaskText = this.tasks[index];
  }

  saveTask(index: number) {
    if (this.editTaskText.trim()) {
      this.tasks[index] = this.editTaskText;
      this.editingIndex = null;
      this.editTaskText = '';

      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editTaskText = '';
  }
}
