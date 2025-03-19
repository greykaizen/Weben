# 🚀 Social Knowledge Platform

A web platform inspired by **Reddit, Quora, and Medium**, built using **pure HTML, CSS, JavaScript, and PHP** with a **PostgreSQL database**. The platform allows users to share knowledge, discuss topics, and engage in meaningful discussions.

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla JS)
- **Backend:** PHP
- **Database:** PostgreSQL

## 🌟 Features

- 📝 **Post Creation**: Users can write and publish posts.
- 💬 **Comment System**: Engage with posts through comments.
- 🔥 **Upvote/Downvote**: Vote on posts to surface quality content.
- 🔎 **Search Functionality**: Find posts and discussions easily.
- 👤 **User Authentication**: Secure login and signup.
- 📜 **Categories & Tags**: Organize content for better discoverability.
- 🎨 **Responsive Design**: Mobile-friendly user interface.
- 🔐 **OAuth 2.0 Integration**: Seamless third-party authentication.

## 📂 Project Structure

```
/social-knowledge-platform
│── index.php          # Home page
│── login.php          # User authentication page
│── register.php       # User registration
│── dashboard.php      # User dashboard
│── post.php           # Post details page
│── submit_post.php    # Post submission logic
│── comments.php       # Handle comments
│── upvote.php         # Upvote/downvote logic
│── profile.php        # User profile
│── assets/
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   ├── images/        # Static assets
│── includes/
│   ├── db.php         # Database connection
│   ├── header.php     # Header section
│   ├── footer.php     # Footer section
│── README.md          # Project documentation
```

## 🚀 Getting Started

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/social-knowledge-platform.git
cd social-knowledge-platform
```

### 2️⃣ Setup Database
1. Create a PostgreSQL database.
2. Import the provided SQL schema.
3. Configure database credentials in `includes/db.php`.

### 3️⃣ Run the Project
Make sure you have PHP installed and run:
```sh
php -S localhost:8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

## 🎯 Roadmap
- [ ] Implement rich text editor for posts
- [ ] Add notifications system
- [ ] Improve SEO optimization
- [ ] Implement AI-based post scoring system

## 💡 Contributing
Contributions are welcome! Feel free to submit a PR.

## 📜 License
MIT License © 2025 Your Name

