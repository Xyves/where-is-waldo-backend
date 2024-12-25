# Where is Waldo Backend: Photo Tagging App API

![Where's Waldo](https://i.postimg.cc/3wtdm2kN/image.png)

## [API Documentation]()

Welcome to the Where's Waldo Backend, the core server-side component of the photo tagging game! It manages essential functions like user login, score tracking, and leaderboard updates, seamlessly interacting with the frontend to provide an immersive experience for players.

 
## 🚀 Built With

- **Node.js** – The runtime environment for building scalable and efficient server-side applications.
- **Express.js** – The web framework for building the API and handling routing.
- **Prisma** – ORM tool to manage database queries and ensure efficient data handling.
- **dotenv** – For environment variable management to keep sensitive data secure.
- **cors** – Ensures cross-origin requests are handled securely.

## ✨ Features

- **Leaderboard API** – Store and retrieve user scores, including time, username, and submission date.
- **Character Validation** – API endpoint to check if the clicked character is correct.
- **Custom Error Handling** – API responses are clearly structured to handle errors.

### 🌐 Prisma Integration

- **Database Management** – Prisma interacts with a PostgreSQL database to store game data and leaderboard scores.
- **Efficient Queries** – Fetch leaderboard data sorted by the fastest times to display player rankings.
- **Character Verification** – Verify if the clicked character is valid using Prisma’s database queries.

## 📄 Installation Instructions

To run project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Xyves/where-is-waldo-backend

   ```

2. cd where-is-waldo-backend

   ```bash
   npm install

   ```

3. Create your own ENV variables for DATABASE_URL
   ```bash
   node app.js
   ```
