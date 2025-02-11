# WhereWork App

## Overview
WhereWork is a web-based application designed to facilitate employee attendance tracking with location-based authentication and facial recognition.

## Features
- User authentication (Login, Register, Forgot Password)
- Attendance tracking with geolocation and selfie verification
- Data storage and retrieval via Google Sheets integration
- Automated daily reports sent via WhatsApp at 18:00 WIB

## Technologies Used
- Frontend: React.js (Vite)
- Backend: Node.js, Express.js
- Database: Google Sheets (via API integration)
- Authentication: Firebase/Auth
- Cloud Hosting: Vercel/Netlify

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS version)
- npm or yarn
- Git

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/wherework-app.git
   cd wherework-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure
```
wherework-app/
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── ForgotPassword.js
│   ├── pages/
│   │   ├── Dashboard.js
│   │   ├── Attendance.js
│   ├── App.js
│   ├── main.js
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## Contribution
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## License
This project is licensed under the MIT License.

