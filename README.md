## Architectural Static Website

This repository contains the source code for a static website built with modern frontend tools, focusing on a lightweight and robust setup. The project uses **Webpack** for asset bundling, **Handlebars.js JavaScript API** for templating, **SCSS** for powerful styling, **Vanilla JavaScript** for all client-side functionality, and **LeafletJs** for maps.

---

### Features

- **Modular Build System:** Powered by **Webpack** for efficient bundling and asset optimization.
- **Templating:** Uses **Handlebars.js** to create reusable and dynamic HTML components.
- **Modern Styling:** Styles are written in **SCSS** (Sass) for variables, nesting, and mixins.
- **Clean Logic:** All client-side behavior is implemented with **Vanilla JavaScript**.
- **Production-Ready:** Configured for both development and optimized production builds.

---

### Prerequisites

You will need the following installed on your local machine:

- **Node.js** (LTS version recommended)
- **npm**

---

### Installation and Setup

1.  **Clone the repository:**

    Bash

    ```
    git clone 'git@github.com:zebedeeLewis/architectural.git'
    cd architectural

    ```

2.  **Install dependencies:**

    Bash

    ```
    npm install

    ```

---

### Build Commands

`npm start`
Starts a local development server with live reloading.

`npm run build`

Compiles and optimizes all assets for production into the output directory.

---

### Debugging Build Scripts with Node Inspector

When encountering issues with Webpack or custom build scripts, you can use the built-in Node.js inspector with the **Node Inspector Manager (NIM)** Chrome extension for a familiar debugging experience.

#### Steps to Debug:

1.  **Install NIM:** Ensure you have the [Node Inspector Manager](https://www.google.com/search?q=https://chrome.google.com/webstore/detail/node-inspector-manager-ni/dgmfplcnmignmgmbncljfcgpakeegego) Chrome extension installed.
2.  **Run the Debug Script:** Execute the inspector from your terminal:

    Bash
    To debug development setup:

    ```
    npm run inspect:webpack:dev
    # The terminal will display a URL like: "Debugger listening on ws://127.0.0.1:9229/..."

    ```

    To debug production setup:

    ```
    npm run inspect:webpack:prod
    # The terminal will display a URL like: "Debugger listening on ws://127.0.0.1:9229/..."
    ```

3.  **Open Chrome DevTools:**
        -   Click on the **Node Inspector Manager** extension icon in your Chrome browser.

        -   It should automatically detect the running Node.js process and open the **Chrome DevTools** window, paused at the start of your script.

        -   You can now set breakpoints, step through the code, and inspect variables just as you would for client-side JavaScript.
    ---

### Technologies

- **Build Tool:** Webpack
- **HTML:** Handlebars.js
- **CSS:** SCSS (Sass)
- **JavaScript:** Vanilla JS
- **Package Manager:** npm/Yarn
