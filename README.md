# 🚀 Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js to showcase projects, skills, and professional information.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This is a comprehensive personal portfolio website that showcases:
- **Home Page**: Introduction with animated text and particle effects
- **About Section**: Personal information, skills, and GitHub statistics
- **Projects**: Portfolio of completed projects with descriptions and links
- **Achievements**: Awards, certifications, and accomplishments
- **Resume**: Downloadable resume in PDF format
- **Contact**: Social media links and contact information

## ✨ Features

### 🎨 **Modern Design**
- Clean and professional UI design
- Responsive layout for all devices
- Smooth animations and transitions
- Particle.js background effects
- Typewriter effect for dynamic text

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly navigation
- Adaptive layouts

### 🚀 **Performance**
- Fast loading times
- Optimized images and assets
- Lazy loading components
- Efficient routing

### 🛠 **Technical Features**
- React Router for navigation
- Bootstrap for styling
- GitHub calendar integration
- PDF resume generation
- Social media integration

## 🛠 Technologies Used

### **Frontend**
- **React.js** (v17.0.2) - Main framework
- **React Router DOM** (v6.2.2) - Client-side routing
- **Bootstrap** (v5.1.3) - CSS framework
- **React Bootstrap** (v2.2.1) - Bootstrap components for React
- **React Icons** (v4.8.0) - Icon library

### **Styling & Effects**
- **CSS3** - Custom styling
- **React TSParticles** (v1.42.2) - Particle effects
- **Typewriter Effect** (v2.18.2) - Animated text

### **Additional Libraries**
- **Axios** (v0.26.1) - HTTP client
- **React GitHub Calendar** (v3.2.2) - GitHub contribution graph
- **React PDF** (v5.7.1) - PDF viewing
- **@react-pdf/renderer** (v2.2.0) - PDF generation

### **Development Tools**
- **Node.js** - Runtime environment
- **npm** - Package manager
- **Create React App** - Build tool
- **ESLint** - Code linting

## 📁 Project Structure

```
Portfolio-master/
├── public/
│   ├── index.html
│   ├── favicon.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   ├── AboutCard.js
│   │   │   ├── Github.js
│   │   │   ├── Techstack.js
│   │   │   └── Toolstack.js
│   │   ├── Achievements/
│   │   │   ├── AchievementCard.js
│   │   │   └── Achievements.js
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   ├── Home2.js
│   │   │   └── Type.js
│   │   ├── Projects/
│   │   │   ├── ProjectCards.js
│   │   │   └── Projects.js
│   │   ├── Resume/
│   │   │   └── ResumeNew.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── Particle.js
│   │   ├── Pre.js
│   │   └── ScrollToTop.js
│   ├── Assets/
│   │   ├── Projects/ (Project images)
│   │   ├── about.png
│   │   ├── home-bg.jpg
│   │   ├── home-main.svg
│   │   ├── logo.png
│   │   └── Sony Resume.pdf
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── style.css
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Git**

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Portfolio-master.git
   cd Portfolio-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## 📖 Usage Guide

### Customizing Content

1. **Personal Information**
   - Edit `/src/components/About/About.js` for personal details
   - Update `/src/components/Home/Home.js` for home page content
   - Modify `/src/components/Resume/ResumeNew.js` for resume information

2. **Projects**
   - Add project images to `/src/Assets/Projects/`
   - Update `/src/components/Projects/Projects.js` with project details
   - Modify `/src/components/Projects/ProjectCards.js` for card styling

3. **Skills & Technologies**
   - Edit `/src/components/About/Techstack.js` for technical skills
   - Update `/src/components/About/Toolstack.js` for tools and software

4. **Achievements**
   - Modify `/src/components/Achievements/Achievements.js` for awards and certifications

### Styling Customization

1. **Colors & Theme**
   - Edit `/src/style.css` for global styles
   - Modify `/src/App.css` for component-specific styles
   - Update Bootstrap variables in component files

2. **Layout & Responsiveness**
   - Adjust Bootstrap classes in component files
   - Modify CSS media queries for responsive design

## 🎨 Customization

### Changing Colors
The color scheme can be customized by modifying CSS variables in the style files:

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --accent-color: #28a745;
}
```

### Adding New Sections
1. Create new component files in `/src/components/`
2. Add routing in `/src/App.js`
3. Update navigation in `/src/components/Navbar.js`

### Updating Images
1. Replace images in `/src/Assets/`
2. Update image paths in component files
3. Optimize images for web use

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `build` folder to Netlify**

### Deploy to GitHub Pages

1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/Portfolio-master"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original template by [Soumyajit4419](https://github.com/soumyajit4419/Portfolio)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Styling with [Bootstrap](https://getbootstrap.com/)
- Particle effects with [TSParticles](https://particles.js.org/)

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)
- **Portfolio**: [Your Portfolio Website](https://your-portfolio.com)

---

⭐ **If you found this project helpful, please give it a star!**

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) 

