# Web Lab HTML & CSS

Welcome to the university project for web development course! In this project, we are building web interface of the CRM (Customer Relationship Management) system for culinary masters, focusing on recipe and menu management.

## Getting Started with Vite

[Vite](https://vitejs.dev/) is a fast development build tool that can greatly simplify your web development workflow. To get started with this project using Vite, follow these steps:

### Prerequisites

Before you begin, ensure you have Node.js and npm (Node Package Manager) installed on your system. If not, you can download and install them from the [official Node.js website](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/ashotvdovychenko/tangerine-web.git
    ```
2. Change your working directory to the project folder:
    ```bash
    cd tangerine-web
    ```
3. Install project dependencies using npm:
    ```bash
    npm install
    ```

### Development Server

Now that you have the project and its dependencies installed, you can start the development server:

```bash
npm run dev
```
This command will launch the Vite development server, and you can access your CRM application at http://localhost:8080 in your web browser.

### Building for Production

When you're ready to deploy your CRM application, you can create a production-ready build using the following command:
```bash
npm run build
```
This will generate optimized production-ready files in the dist directory.

### Project Structure

Here's a brief overview of the project structure:

- src/ - This directory contains your application source code, including HTML and CSS files.
- public/ - Public assets like images, videos, fonts.
- dist/ - The production build output directory, generated when running npm run build.
- vite.config.js - Vite configuration file where you can customize project settings.