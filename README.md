# 📦 BorrowBox - Item & Guidance Request System

A full-stack web application that allows users to request and provide items or guidance within a community. Built with modern web technologies for a seamless user experience.

## 🚀 Tech Stack

**Frontend:**
- React 18+ (JavaScript)
- React Router DOM for navigation
- Bootstrap 5 for responsive UI
- Lucide React for icons
- Axios for API calls

**Backend:**
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT authentication
- Bcrypt.js for password hashing
- CORS middleware

**Database:**
- MongoDB (Cloud)

## ✨ Features

### 🔐 Authentication System
- User registration with profile details (name, gender, phone, area)
- Secure login/logout with JWT tokens
- Email and password validation

### 📋 Request Management
- **Item Requests**: Borrow physical items (books, tools, equipment)
- **Guidance Requests**: Get help with topics (tutoring, advice, skills)
- Create, view, and manage requests
- Real-time status updates (Pending → Accepted → Completed)

### ⭐ Rating System
- Providers can rate requestors after completion
- Average rating calculation and display
- "New User" badge for users without ratings
- Detailed rating history with comments

### 👤 Profile Management
- View and edit personal information
- Area selection from predefined list
- Rating summary and history
- Member since date tracking

### 🔍 Advanced Filtering & Search
- Filter by request type (Item/Guidance)
- Search across names, areas, items, and topics
- Sort by date, rating, or area
- Real-time filtering results

### 📱 Responsive Design
- Mobile-first approach
- Bootstrap-powered responsive grid
- Touch-friendly interface
- Professional card-based layout

## 🏗️ Project Structure

```
borrowbox-system/
├── src/                          # Frontend React application
│   ├── components/               # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── RequestCard.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── RatingModal.jsx
│   ├── pages/                    # Main application pages
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   ├── MainPage.jsx
│   │   ├── AddRequestPage.jsx
│   │   ├── RequestsPage.jsx
│   │   └── ProfilePage.jsx
│   ├── context/                  # React Context providers
│   │   └── AuthContext.jsx
│   ├── services/                 # API service layer
│   │   └── api.js
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # App entry point
├── server/                       # Backend Node.js application
│   ├── models/                   # Mongoose schemas
│   │   ├── User.js
│   │   ├── Request.js
│   │   └── Rating.js
│   ├── controllers/              # Business logic controllers
│   │   ├── userController.js
│   │   ├── requestController.js
│   │   └── ratingController.js
│   ├── routes/                   # API route definitions
│   │   ├── userRoutes.js
│   │   ├── requestRoutes.js
│   │   └── ratingRoutes.js
│   ├── middlewares/              # Custom middleware
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── config/                   # Configuration files
│   │   └── database.js
│   └── index.js                  # Server entry point
├── .env                          # Environment variables
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn package manager
- MongoDB connection string

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd borrowbox-system
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**
Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb+srv://jashan:jashan@borrowboxcluster.af1swpn.mongodb.net/?retryWrites=true&w=majority&appName=borrowBoxCluster
JWT_SECRET=your-super-secret-jwt-key-here-change-in-production
PORT=5000
```

4. **Start the application**

**Development mode (runs both frontend and backend):**
```bash
npm run dev
```

**Alternatively, run separately:**

Backend only:
```bash
npm run server
```

Frontend only:
```bash
npm run client
```

5. **Access the application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📱 Usage Instructions

### Getting Started
1. **Create an Account**: Sign up with your details including name, email, password, gender, phone, and area
2. **Browse Requests**: View all pending requests on the main page
3. **Filter & Search**: Use filters to find specific types of requests or search by keywords
4. **Accept Requests**: Click "Accept Request" to help someone

### Making Requests
1. **Add Request**: Click "Add New Request" from the navigation or main page
2. **Choose Type**: Select either "Item Request" or "Guidance Request"
3. **Fill Details**: 
   - **Item**: Name, quantity, and when you need it
   - **Guidance**: Topic and time needed
4. **Add Description**: Optional details about your request
5. **Submit**: Your request will appear on the main feed

### Managing Requests
1. **My Requests**: View all your requests and their status
2. **Helping Others**: See requests you've accepted
3. **Mark Complete**: Providers can mark requests as completed
4. **Rate Users**: After completion, rate the requestor's experience

### Profile Management
1. **View Profile**: Check your rating, member details, and received ratings
2. **Edit Information**: Update name, phone number, and area
3. **Rating History**: View all ratings you've received with comments

## 🔮 Future Improvements

### Real-time Features
- WebSocket integration for live notifications
- Real-time request status updates
- Chat system between requestors and providers

### Enhanced Functionality
- Request categories and tags
- Advanced matching algorithms
- Request scheduling and reminders
- Image uploads for item requests

### Community Features
- User verification badges
- Community leaderboards
- Request history analytics
- Report and moderation system

### Mobile App
- React Native mobile application
- Push notifications
- Offline mode capabilities
- Location-based matching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email [support@borrowbox.com](mailto:support@borrowbox.com) or create an issue in the repository.

---

**Built with ❤️ using React, Node.js, Express, and MongoDB**