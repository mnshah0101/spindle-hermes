# Spindle

This is the source code for Spindle, a service that abstractly generates MongoDB databases and AI powered APIs from CSV files.

The project is divided into two main directories: `frontend` and `server`.

## Structure

The `frontend` directory contains a Next.js web application that serves as the user interface.

The `server` directory contains a Node.js Express server that handle all the backend operations including CRUD operations and interaction with the MongoDB Atlas cluster.

## Running the Project

To get this project running locally you will need to add configuration variables to the respective `.env` files of the `frontend` and `server`.

Frontend variables:

- MONGO_URI: Your MongoDB connection string
- NEXT_PUBLIC_SERVER_URL: Your server port/connection url

Backend variables:

- MONGO_URI: Your MongoDB connection string
- EXPRESS_PORT: The port where the server will run

## Author

This project was created by Moksh Shah.

## Version

This is version 1.0 of Spindle.
