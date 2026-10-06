
# 🎮 GameXplorer

**GameXplorer** is a full-stack web application that allows users to search, view, and manage their favorite video games. It features an Angular frontend integrated with a Spring Boot backend and MySQL database, providing fast, secure, and responsive user experiences.

---

## 🚀 Features

- 🔍 Search games by name and retrieve details like release date, platforms, genres, ratings, and screenshots
- ❤️ Add games to a personal favorites list stored in the backend
- 🖼️ Display screenshots using a dynamic image slider
- 🔐 User login and signup system (in progress)
- 📱 Fully responsive design for desktop and mobile
- 🔒 Backend security tested with Nessus, Nmap, and Wireshark

---

## 🧑‍💻 Tech Stack

### Frontend
- Angular (TypeScript)
- HTML5, SCSS
- Angular Router
- API communication with Spring Boot

### Backend
- Spring Boot (Java 17)
- RESTful APIs with Spring MVC
- MySQL
- JPA/Hibernate
- Jackson for JSON parsing

### APIs & Tools
- RAWG.io API for game data
- Nessus, Nmap, Wireshark for security testing

---

## 🗂️ Folder Structure

```
gameXplorer/
├── frontend/              # Angular app
│   └── src/app/
│       ├── components/    # Login, Game Cards, Favorites, etc.
│       ├── services/      # API Services
│       └── model/         # TypeScript Interfaces
├── backend/               # Spring Boot app
│   ├── controller/        # REST Controllers
│   ├── entity/            # JPA Entities
│   ├── repository/        # Repositories (CRUD)
│   ├── service/           # Business Logic
│   └── application.properties
└── README.md
```

---

## ⚙️ Installation & Setup

### ✅ Prerequisites
- Node.js and npm
- Java 17
- MySQL
- Angular CLI
- Maven

---

### 🔧 Backend (Spring Boot)

```bash
cd backend
```

1. Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/gamexplorer
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD
spring.jpa.hibernate.ddl-auto=update
```

2. Start the backend:

```bash
./mvnw spring-boot:run
```

Server: `http://localhost:8080`

---

### 🌐 Frontend (Angular)

```bash
cd frontend
```

1. Install dependencies:

```bash
npm install
```

2. Update `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
```

3. Start the frontend:

```bash
ng serve
```

App: `http://localhost:4200`

---

## 🔒 Security Testing Tools

- **Nmap** – Port scanning
- **Nessus** – Vulnerability assessment
- **Wireshark** – Packet inspection

---

## 📌 Key Functionalities

- Real-time game search and detail display
- Screenshot slider using Angular components
- Favorites stored per user using JSON fields
- REST API integration with Spring Boot
- MySQL for persistent storage

---

## 🤝 Contributing

Contributions are welcome!

```bash
git clone https://github.com/your-username/gameXplorer.git
git checkout -b feature-name
# make changes
git commit -m "Add feature"
git push origin feature-name
```

Then open a pull request 🚀

---

## 📃 License

This project is licensed under the **MIT License**

---

## 🔮 Future Roadmap

- ✅ Migrate backend from Django to Spring Boot
- 🔜 Add JWT-based authentication
- 🔜 Implement game review and rating system
- 🔜 Add recommendation engine based on user preferences
