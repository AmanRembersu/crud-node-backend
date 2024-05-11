# crud-node-backend

# Node Backend CRUD Project with Express

This is a basic CRUD (Create, Read, Update, Delete) project for a Node.js backend using Express. It includes routes for managing a simple database, and has been tested using Insomnia for API requests. The project also demonstrates how to connect to a MongoDB database hosted on MongoDB Atlas.

## Installation

1. Clone the repository:


   git clone https://github.com/AmanRembersu/crud-node-backend.git
   

2. Install dependencies:

   
   npm install,
   install nodemon,
   install moongose,
   install express
  

4. Create a `.env` file in the root directory and add your MongoDB Atlas connection string:

  
   i used mine you can put your mongo string here


5. Start the server:

  
   npm run dev
   

## Routes

The following routes are available:

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get a single item by ID
- `POST /api/items` - Create a new item
- `PUT /api/items/:id` - Update an existing item by ID
- `DELETE /api/items/:id` - Delete an item by ID

## Database Connectivity

This project uses MongoDB as its database, and connects to a MongoDB Atlas cluster. The connection string is stored in the `.env` file and is accessed using the `dotenv` package. or you can put it thorugh index.js

## Testing

The project has been tested using Insomnia, a popular REST client, to ensure that all CRUD operations work as expected. You can use Insomnia or any other REST client to test the API endpoints.
