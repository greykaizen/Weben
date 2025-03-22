# Weben

<div align="center">
  
[![Stars](https://img.shields.io/github/stars/greykaizen/weben?style=social)](https://github.com/greykaizen/weben/stargazers)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
  
</div>

Knowledge Nexus is a modern content sharing and discussion platform inspired by Reddit and Medium. Built with a clean, efficient stack of HTML, CSS, JavaScript, and PHP with PostgreSQL.

<div align="center">
  
![Weben Screenshot](/assets/mainLogo.png)
  
</div>

## ✨ Features

- **Content Publishing** - Create and share formatted articles
- **Discussion System** - Nested comment threads with voting
- **User Reputation** - Upvote/downvote system that promotes quality content
- **Search Engine** - Find relevant content across the platform
- **User Authentication** - Secure registration and login flow
- **Content Organization** - Categories and tags for better discovery
- **Responsive Design** - Optimized for all devices

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Database**: PostgreSQL

## 🚀 Quick Start

### Prerequisites

- Web server (Apache/Nginx)
- PHP 7.4+
- PostgreSQL

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/greykaizen/weben.git
   cd weben
   ```

2. Set up the database
   ```bash
   # Create database and import schema
   psql -d postgres -f database/schema.sql
   ```

3. Configure the application
   ```bash
   # Copy the example config
   cp config/config.example.php config/config.php
   
   # Edit the configuration with your database credentials
   ```

4. Start your web server and navigate to the application

## 📖 Documentation

Full documentation is available in the [docs directory](docs/):

- [Installation Guide](docs/installation.md)
- [User Guide](docs/user-guide.md)
- [API Documentation](docs/api.md)
- [Contributing Guide](docs/contributing.md)

## 🗺️ Roadmap

- [x] Core platform functionality
- [x] User authentication system
- [x] Basic content publishing
- [ ] Rich text editor integration
- [ ] Notification system
- [ ] User profiles and activity tracking
- [ ] Enhanced content discovery algorithms

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See the [contributing guide](CONTRIBUTING.md) for detailed instructions.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by platforms like Reddit and Medium
- Built with love by the open source community