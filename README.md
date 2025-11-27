
# Website Down Detector

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/react-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%233178C6.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**A premium, server-side diagnostic tool to instantly check if a website is down for everyone or just you. Built with React, TypeScript, and Tailwind CSS by HSINI MOHAMED.**

---

### [🚀 LIVE DEMO](https://doodax.com/tools/website-status-checks/index.html) 
*(Opens in a new tab)*

---

## About The Project

In an age where digital presence is paramount, website downtime can mean lost revenue, damaged credibility, and a poor user experience. The **Website Down Detector** provides a fast, reliable, and user-friendly solution to diagnose website availability.

Unlike basic browser-based checks that can be misleading due to local network or caching issues, this tool simulates a server-side request. This approach bypasses common client-side problems (like CORS) to give a definitive answer on a website's true status.

The project combines robust functionality with a polished, modern interface, featuring a "deep space" aesthetic and an immersive animated background for a superior user experience.

### Key Features

- 🌐 **Server-Side Checks:** Bypasses CORS and local network issues for accurate results.
- ⏱️ **Real-Time Diagnostics:** Provides instant feedback on uptime status, HTTP codes, and response time.
- 🌍 **Simulated Global Perspective:** Helps differentiate between local and global outages with simulated checks from multiple locations.
- 📱 **Fully Responsive:** Flawless performance on any device, from desktop to mobile.
- ✨ **Modern & Immersive UI:** A clean, professional design with a lightweight, animated particle background.
- 📈 **SEO-Driven Content:** Includes a comprehensive, expandable SEO guide on website health.
- 🔒 **Privacy Focused:** Checks are anonymous and no user data is sold.

## Project Structure

The codebase is organized into logical modules for clarity and scalability:

```
/
├── public/
│   ├── favicon.svg           # Application favicon
│   ├── robots.txt            # SEO crawler instructions
│   └── sitemap.xml           # XML Sitemap for search engines
├── services/
│   └── statusChecker.ts      # Simulates the server-side API route for status checks
├── components/
│   ├── DownDetectorTool.tsx  # The main interactive tool component
│   ├── Layout.tsx            # Main layout with header, footer, background, and modals
│   └── SeoArticle.tsx        # The collapsible, content-rich SEO article
├── App.tsx                   # Root application component
├── index.html                # Main HTML entry point with SEO metadata and schema
├── index.tsx                 # React application entry point
├── types.ts                  # Shared TypeScript types and interfaces
└── README.md                 # This file
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and a package manager like npm or yarn installed.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/hsinidev/website-down-detector.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Start the development server
    ```sh
    npm start
    ```
    The application will be available at `http://localhost:3000`.

## Contact

**HSINI MOHAMED**

-   **GitHub:** [https://github.com/hsinidev](https://github.com/hsinidev)
-   **Email:** hsini.web@gmail.com
-   **Portfolio:** [doodax.com](https://doodax.com)

Project Link: [https://github.com/hsinidev/website-down-detector](https://github.com/hsinidev/website-down-detector)
