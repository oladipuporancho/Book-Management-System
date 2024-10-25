Book Management System (RESTful API with EJS)

This project is a RESTful API for managing books, complete with user authentication, profile management, and book collection management. It uses Node.js, Express, MongoDB, JWT for authentication, and EJS for templating.
Table of Contents
1. Installation
2. Usage
3. API Documentation
4. Additional Features
5. Project Structure
6. Contributing
7. License

Installation

To set up this project locally, follow these steps:

1. Clone the Repository

'bash
git clone https://github.com/oladipuporancho/book_management_system-assesement-#book_management_system-assesement-
cd book-management-system

2. Install Dependencies

Install the necessary packages:

npm install

3. Set Up Environment Variables

Create a .env file in the root of your project and add the following environment variables:

PORT=3000
JWT_SECRET=ranchosupersecrect10
DB_URI=mongodb+srv://<Rancho>:<Rancho_10>@cluster0.mongodb.net/book_management_system?retryWrites=true&w=majority
EMAIL_HOST=oladipuporancho10@gamil.com
EMAIL_PORT=2525
EMAIL_USER=Rancho
EMAIL_PASS=Rancho_10

Replace each placeholder with your actual credentials.


---

Usage

Running the Application

To start the server, use the following command:

npm start

The API will run at http://localhost:3000. Use Postman or any other API client to interact with the endpoints.


---

API Documentation

Here’s a list of the main API endpoints:

Authentication

POST /api/register — Register a new user.

POST /api/login — Log in and obtain a JWT.


Profile Management

GET /api/profile — View the logged-in user's profile.

PUT /api/profile — Update profile details (username, email, password).

DELETE /api/profile — Delete user profile.


Book Management

POST /api/books — Add a new book to the user's collection.

GET /api/books — View all books in the user's collection. Optional query parameters for filtering by genre, author, or rating.

GET /api/books/:id — View a specific book by its ID.

PUT /api/books/:id — Update book details. Only the book owner can update.

DELETE /api/books/:id — Delete a book from the user's collection. Only the book owner can delete.



---

Additional Features

JWT-based Authentication: All profile and book management routes are protected by JWT-based authentication.

Welcome Email: Sends a welcome email to users upon successful registration using Nodemailer and an EJS template.

Environment Variables: Sensitive information is stored in environment variables for security.


---

Project Structure

book_management_system/
├── controllers/         # Contains the logic for handling requests (auth, profile, book)
│   ├── authController.js
│   ├── profileController.js
│   └── bookController.js
├── models/              # Contains the data models (User, Book)
│   ├── User.js
│   └── Book.js
├── routes/              # Defines the application routes (auth, profile, book)
│   ├── authRoutes.js
│   ├── profileRoutes.js
│   └── bookRoutes.js
├── views/               # Contains EJS templates for emails
│   └── welcome.ejs
├── .env                 # Environment variables
├── app.js               # Main application entry point
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation



Contributing

If you’d like to contribute to this project, please fork the repository, create a new branch, and submit a pull request.

Steps to Contribute

1. Fork the Repository.


2. Create a Branch: git checkout -b feature-name


3. Make Changes and Commit: git commit -m "Add feature"


4. Push to Branch: git push origin feature-name


5. Submit Pull Request for review.


---

License

This project is licensed under the MIT License. See the LICENSE file for details.


- Customize URLs: https://github.com/oladipuporancho/book_management_system-assesement-#book_management_system-assesement-.
- Add Additional Sections if Needed: For larger projects, consider adding more sections or linking to additional markdown files.
- License:project has a specific license, including a LICENSE file and update the License section accordingly.
