
## Shoply

Shoply is an e-commerce website that offers new and pre-owned products. Additionally, we promote sustainability by encouraging the reuse and recycling of goods, helping to reduce waste and positively impact the environment.

## Features

- User registration and authentication
- Product listing and browsing
- Adding products to the cart
- Contact page for inquiries
- User account management
- Payment method management
## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
## Installation

1. **Clone the repository of frontend**:

    ```sh
    git clone https://github.com/AsmaaMostafa01/Shoply_Website.git
    ```
2.**Navigate to the project directory**:

    ```sh
    cd Shoply
    ```
3. **Install dependencies for the backend**:

    ```sh
    cd backend
    npm install
    ```
4. **Install dependencies for the frontend**:

    ```sh
    cd ../frontend
    npm install
    ```
## Running the Project
--> **Clone the repository of BackEnd**:

    ```sh
    git clone https://github.com/AsmaaMostafa01/ShoplyBackend.git
    ```
### Backend

1. **Create a `.env` file in the `backend` directory** and add the following environment variables:

    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

2. **Start the backend server**:

    ```sh
    npm start
    ```
### Frontend

1. **Start the frontend development server**:

    ```sh
    npm start
    ```

2. **Open your browser** and navigate to `http://localhost:3000`.

## API Endpoints

### Auth

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Log in a user

### Users

- `GET /api/users/me`: Get current user details

### Products

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a single product by ID
### Edit account
- `PUT /api/myaccount` :edit your profile by adding token header and edit body
### Contact Us
-`POST /api/contacts` : write the message or problems to us
-`GET//api/contacts`: get all contacts messages 

## Contributing

1. **Fork the repository**.
2. **Create a new branch**: `git checkout -b feature/your-feature-name`.
3. **Commit your changes**: `git commit -m 'Add some feature'`.
4. **Push to the branch**: `git push origin feature/your-feature-name`.
5. **Open a pull request**.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> origin/master
