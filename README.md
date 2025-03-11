# ✅ Angular Todo List 🚀

Bu proje, **Angular** kullanılarak oluşturulmuş bir **Görev Yönetim (Todo List) Uygulamasıdır**.  
Kullanıcılar görev ekleyebilir, silebilir ve düzenleyebilir. **LocalStorage** desteği sayesinde veriler tarayıcıda saklanır.  

---

# 📸 Proje Önizlemesi

Bu proje aşağıdaki gibi görünmektedir:

![Todo List Önizleme](https://github.com/busenurdmb/angular-todo/blob/main/src/assets/ProjectImage/todo1.png)

## 🎯 **Özellikler**
✅ **Görev Ekleme** – Yeni görevleri hızlıca ekleyin.  
❌ **Görev Silme** – Tamamlanmış veya gereksiz görevleri kaldırın.  
✏️ **Görev Güncelleme** – Görevleri kolayca düzenleyin.  
📌 **LocalStorage Desteği** – Sayfa yenilendiğinde görevler kaybolmaz.  
🎨 **Modern & Şık Tasarım** – Kullanıcı dostu ve minimalist arayüz.  
🌙 **Karanlık Mod** – Açık/Koyu tema seçeneği ile kişiselleştirin.  
☑️ **Görev Tamamlama** – Yapılan görevleri işaretleyerek tamamlanmış olarak kaydedin.  
📅 **Sıralama Seçenekleri** – Görevleri eklenme tarihi veya son teslim tarihine göre sıralayın.  

---
## 🔥 **Teknolojiler**
✔️ Angular 17+ – Google tarafından geliştirilen modern frontend framework'ü. Tek sayfa uygulamalar (SPA) geliştirmek için kullanılır.

✔️ TypeScript – JavaScript'in güçlü ve tip güvenliği sağlayan süper seti. Hata ayıklamayı kolaylaştırır ve büyük projelerde kodun daha okunaklı olmasını sağlar.

✔️ HTML & CSS – HTML ile sayfanın iskeleti oluşturulur, CSS ile tasarım yapılır. Proje şık ve kullanıcı dostu bir arayüze sahiptir.

✔️ LocalStorage API – Kullanıcı verilerini tarayıcıda saklamaya yarar. Sayfa yenilense bile görevlerin kaybolmamasını sağlar.

✔️ Karanlık Mod Desteği – Açık ve koyu tema seçeneği sunar. Kullanıcılar tercihlerine göre tema değiştirebilir.

✔️ Responsive UI – Mobil ve masaüstü uyumlu esnek tasarım. Tüm cihazlarda düzgün görüntülenir ve kullanılabilir.

----
# 📸 Proje Önizlemesi

Bu proje aşağıdaki gibi görünmektedir:

![Todo List Önizleme](https://github.com/busenurdmb/angular-todo/blob/main/src/assets/ProjectImage/todo2.png)
![Todo List Önizleme](https://github.com/busenurdmb/angular-todo/blob/main/src/assets/ProjectImage/todo3.png)
![Todo List Önizleme](https://github.com/busenurdmb/angular-todo/blob/main/src/assets/ProjectImage/todo4.png)
![Todo List Önizleme](https://github.com/busenurdmb/angular-todo/blob/main/src/assets/ProjectImage/todo5.png)

## 📁 **Proje Dosya Yapısı ve Açıklamaları**
---
angular-todo/
- │── 📦 node_modules/ → Proje bağımlılıkları (otomatik oluşturulur)
- │── 📂 src/ → Projenin asıl kodları burada!
- │ ├── 📂 app/ → Ana uygulama bileşenleri ve servisler burada!
- │ │ ├── 🎯 app.component.ts → Ana bileşenin TypeScript kodu (iş mantığı)
- │ │ ├── 🎨 app.component.html → Kullanıcı arayüzü
- │ │ ├── 🎨 app.component.css → Stil dosyası
- │ │ ├── 🏗️ app.module.ts → Modül tanımlamaları
- │ ├── 📜 index.html → Ana HTML sayfası
- │ ├── 🚀 main.ts → Angular başlangıç dosyası
- │── ⚙️ angular.json → Yapılandırma ayarları
- │── 📦 package.json → Proje bağımlılıkları
- │── ⚙️ tsconfig.json → TypeScript ayarları


📌 **Açıklamalar:**  
- **app/** → Proje bileşenleri burada bulunur.  
- **app.component.ts** → Ana bileşenin iş mantığını içerir.  
- **app.component.html** → Kullanıcıya gösterilecek arayüz.  
- **app.component.css** → Stil ve tasarım ayarları.  
- **index.html** → Uygulamanın ana HTML dosyasıdır.  
- **main.ts** → Angular uygulamasını başlatır.  
- **theme.service.ts** → Karanlık mod özelliğini yönetir.  
- **sorting.service.ts** → Görev sıralama mantığını yönetir.  

---



---
---
## 🚀 **Kurulum & Çalıştırma**
Projeyi kendi bilgisayarınızda çalıştırmak için şu adımları takip edebilirsiniz:

### 1️⃣ **Projeyi Klonlayın**
```sh
git clone https://github.com/busenurdmb/angular-todo.git
cd angular-todo

### 2️⃣ Bağımlılıkları Yükleyin
```sh
npm install
###3️⃣ Projeyi Çalıştırın
ng serve

# AngularTodo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
