import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Task interface tanımlanıyor (Her görev için bir model)
export interface Task {
  id: number;
  title: string;
  completed: boolean;
  addedDate: Date;
  dueDate?: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public tasks: Task[] = []; // Yapılacak işler listesi
  public newTask: string = ''; // Yeni görev metni
  public taskDueDate?: Date; // Görevin son teslim tarihi
  public editingIndex: number | null = null; // Düzenlenen görevin indexi
  public editTaskText: string = ''; // Düzenleme için geçici metin
  public isDarkMode: boolean = false; // Tema durumu (Açık/Koyu)
  public sortBy: 'added' | 'due' = 'added'; // Sıralama türü

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Kullanıcının önceki tema seçimini kontrol et
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';

      // Önceki görevleri localStorage'dan al
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    }
  }

  // 🌙 Tema değiştirme fonksiyonu
  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  // ➕ Yeni görev ekleme fonksiyonu
  addTask() {
    if (this.newTask.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTask,
        completed: false,
        addedDate: new Date(),
        dueDate: this.taskDueDate ? new Date(this.taskDueDate) : undefined,
      };

      this.tasks.push(newTask);
      this.newTask = '';
      this.taskDueDate = undefined;

      this.saveTasks();
    }
  }

  // ✅ Görevi tamamlandı olarak işaretleme fonksiyonu
  toggleTaskCompleted(task: Task): void {
    task.completed = !task.completed;
    this.saveTasks();
  }

  // ✏️ Görev düzenleme fonksiyonu
  editTask(index: number) {
    this.editingIndex = index;
    this.editTaskText = this.tasks[index].title;
  }

  // 💾 Düzenlenmiş görevi kaydetme fonksiyonu
  saveTask(index: number) {
    if (this.editTaskText.trim()) {
      this.tasks[index].title = this.editTaskText;
      this.editingIndex = null;
      this.editTaskText = '';
      this.saveTasks();
    }
  }

  // ❌ Düzenlemeyi iptal etme fonksiyonu
  cancelEdit() {
    this.editingIndex = null;
    this.editTaskText = '';
  }

  // 🗑️ Görev silme fonksiyonu
  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    this.saveTasks();
  }

  // 📅 Görevleri tarihe göre sıralama fonksiyonu
  sortTasks(): void {
    if (this.sortBy === 'added') {
      this.tasks.sort((a, b) => a.addedDate.getTime() - b.addedDate.getTime());
    } else if (this.sortBy === 'due') {
      this.tasks.sort((a, b) => {
        if (!a.dueDate || !b.dueDate) {
          return !a.dueDate ? 1 : -1;
        }
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      });
    }
  }

  // 💾 Görevleri localStorage'a kaydetme fonksiyonu
  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
