# Frameworkless Node.js Server
This repository contains a solution for building web servers using Node.js without relying on traditional frameworks like Express.js or Fastify. The main features of this solution include:

## Custom "expression!" syntax
A custom syntax for managing control flow and early returns, inspired by async/await. This syntax provides a cleaner and more concise way to write asynchronous code, making it easier to understand and maintain.

The syntax comes in three variations:

expression!: Equivalent to if (!expression) return;.
expression!1: Equivalent to if (!expression) return true;.
expression!0: Equivalent to if (!expression) return false;.

## esbuild plugin
A plugin for esbuild that transforms the custom "expression!" syntax into standard JavaScript, ensuring compatibility with Node.js. This allows developers to write code using the new syntax while the build process takes care of transforming it into runnable code.

## Promisified Express middleware functions
Promise-based versions of commonly used Express middleware functions, such as serverStatic and bodyParser. These functions return true or false to determine whether the middleware chain should continue executing subsequent code, making it easier to control the flow of the application.

## Getting Started
To get started with the Frameworkless Node.js Server solution, follow these steps:

1. Clone this repository using git clone <repository_url>.
2. Install dependencies using npm install.
3. Implement your web server logic using the custom "expression!" syntax and the provided middleware functions.
4. Set up esbuild to include the Frameworkless plugin, which will transform the custom syntax into standard JavaScript during the build process.
5. Run your web server and enjoy the benefits of this lightweight, framework-less solution!

## License
This project is licensed under the [MIT License](https://github.com/<your_username>/frameworkless-node-server/blob/main/LICENSE).

## Contributing
Contributions are welcome! Please follow the [Contributing Guidelines](https://github.com/<your_username>/frameworkless-node-server/blob/main/CONTRIBUTING.md).
