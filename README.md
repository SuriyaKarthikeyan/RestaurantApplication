# Build a Web APP for Jayam Web Solutiions
- Using json-server (your own local fake REST API)
- Install json server using the command --- npm install -g json-server
- Creating db.json file
- Run the fake API using the command --- json-server --watch db.json --port 5000
- Now, the db for product categories and product details are ready.

# Now, Integrate Firebase into our app using google firebase console.
- In firebase console, set up email/password authentication.
- Then click on Hosting tab and get started. Use the commands to install firebase into our app.
  - npm install -g firebase-tools
- Sign in to Google
  - firebase login  
- Initialize your project
  - firebase init 
- Provide the required options under the terminal.
- Register your app. Give it a nickname.
- Add firebase SDK.
  - Use npm -- npm install firebase
  - Add the code in firebase.js file.
- Then give the command -- npm run build [build folder to be given as dist in vite]
- Provide the command - firebase deploy
- Now, the code is deployed in firebase -- [URL: https://resapp-45ea8.web.app]

# Project Flow
- User Signs up - On clicking Submit - Validation Done and Sign Up Authentication done using firebase.
- After authentication - the user details gets stored on the Redux Store. 
- User gets redirects to the Dashboard page.

- User Signs In - On clicking submit - Validation Done and Sign In Authentication done using firebase.
- User fets redirected to the Dashboard page.

- On signing In - if user signed up as a admin role, but signed in for a user role - it will show up error message - using firestore.

- On the Dashboard page header - if user clicks on "Sign Out" - it will sign out of the application and redirects to the login page and remove the corresponding user from the redux store.

- If user role is "user" - then show the User Dashboard otherwise show Admin Dashboard.

- On the User Dashboard - Display the products from the json server endpoints - 
- http://localhost:5000/categories
- http://localhost:5000/products