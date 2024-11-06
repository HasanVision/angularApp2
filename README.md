# PostageStamps - Angular PWA App

Welcome to **PostageStamps**, a simple Angular-based Progressive Web App (PWA) for viewing and purchasing postage stamps. This app is designed to be fast, responsive, and accessible offline, providing a seamless experience across both desktop and mobile devices.

## 📌 Main Features

- **Catalog of Stamps**: View a list of postage stamps with details, images, and prices.
- **Add to Cart**: Easily add selected stamps to your cart.
- **Responsive Design**: Works well on various devices, from mobile to desktop.
- **PWA Support**: Offline access, installation prompt for mobile, and fast load times.
- **Dockerized**: Runs in an isolated Docker container for consistent deployment.

## 🔧 Technologies Used

- **Angular**: Frontend framework
- **Angular PWA**: Service workers and offline support
- **Bootstrap**: Styling and responsive layout
- **Docker**: Containerized deployment with NGINX
- **NGINX**: Lightweight server for production

## 🚀 Getting Started

To get started, make sure you have **Node.js** installed (version 14+ recommended), as well as the **Angular CLI**. You can install the Angular CLI globally by running:

```bash
npm install -g @angular/cli

- Then:
- Clone the repo: git clone https://github.com/HasanVision/angularApp2.git
- cd PostageStamps
-npm install
-ng build --watch --configuration production
- docker-compose build
- docker-compose up
