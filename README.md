# Spindle

This is the source code for Spindle, a service that takes in a CSV and creates a MongoDB on our MongoDB Atlas cluster. It also deploys AI generated APIs, which are crafted using GPT, hosted on our own MongoDB, and run through a virtual machine on our servers.

The project is divided into two main parts: `frontend` and `server`, which hold the frontend and backend code respectively.

## Project structure

- The `frontend` directory contains the Next.js web application that serves as the user interface.

- The `server` directory contains the Node.js Express server that processes backend operations.

Both parts need their own environment variables to function properly. Check the README.md of each part for more details.

## Installation & Setup for Local Development

Before you can run Spindle locally, you'll need Git, Node.js, and npm installed on your machine.

Here's how to get the project running locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/mnshah0101/spindle-hermes
   ```

2. Move into the Spindle directory:

   ```bash
   cd spindle
   ```

3. Install the dependencies in both the `server` and `frontend` folder:

   ```bash
   cd frontend
   npm install
   cd ..
   cd server
   npm install
   ```

4. You can then run the frontend and the server locally using:

   ```bash
   # Run frontend
   cd frontend
   npm run dev

   # Run server
   cd ../server
   npm start
   ```

## Working with Git

If you're new to Git, here are the commands you should get familiar with:

- `git clone <repository>`: Clones a repository into a new directory.
- `git branch`: Lists all local branches in the current repository.
- `git branch <branch>`: Creates a new branch.
- `git checkout <branch>`: Switches to the specified branch and updates the working directory.
- `git add <file>`: Stages the specified file(s).
- `git commit -m "Commit message"`: Commits the staged snapshot with a brief log message.
- `git push origin <branch>`: Pushes the specified branch to the remote repository, along with necessary commits and objects. Creates named branch in the remote repo if it doesn’t exist.
- `git pull`: Fetches the files from the remote repository and merges it with your local one.

To create your own feature branch:

1. Make sure you're in the project directory
2. Use `git checkout -b your-feature-branch` to create a new branch and switch to it
3. Make your changes and then use `git add .` to add all changes to the staging area or `git add <specific file or directory>` to add only specific changes
4. Commit your changes using `git commit -m "Your detailed commit message"`
5. Push your changes to the remote repository with `git push origin your-feature-branch`

## About

This project was made by Moksh Shah and this is the version 1.0 of Spindle.
