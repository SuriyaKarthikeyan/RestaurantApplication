# Build a Restaurant APP for Jayam Web Solutiions
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