# TaskManagement

##  Clone the Repository

Clone the repository to download it to your local machine. This will create a folder named task-management.[gitclone]( https://github.com/your-username/task-management.git)



# Move into the Project Folder

Navigate into the project folder `cd task-management` 


#  Install dependencies

Install all the required libraries (such as Express, Joi, Morgan) used in the project `npm install`


#  Start the Server

 run the server locally `node app.js` ,Your server will start at (http://localhost:5000). You can now open Postman or your browser and start testing the API.


## Approach and Architecture

- The API is built using Node.js and Express.js.
- The project is structured into separate folders: `routes, controllers, services, middleware, and utils`.
- `Input validation` is handled using [Joi].
- Tasks are stored `in-memory` for simplicity.
- Proper `error handling` is implemented to manage issues and provide clear feedback.


## Example API Testing

# Create Task (POST):

To create a new task, use the following cURL command or Postman. [cURLCommand]:curl -X POST http://localhost:5000/tasks -H "Content-Type: application/json" -d 
'{
    "title": "Learn Node.js",
     "status": "pending"
     }'

# Postman Setup:

Set the request method to POST.URL: (http://localhost:5000/tasks).In the Body tab, select raw and choose JSON from the dropdown.
Paste this JSON data:
'{
  "title": "Learn Node.js",
  "status": "pending"
}` Click Send to create the task.

# Get All Tasks (GET):

- To fetch all tasks, use the following cURL command or Postman.
`cURL Command:` (http://localhost:5000/tasks)
- Postman Setup:
Set the request method to GET.[URL:]( http://localhost:5000/tasks).Click Send to retrieve all tasks.



## ensure API runs locally without any issues

The API server is working fine.All routes (such as /tasks, /tasks/:id, etc.) are accessible in Postman.No errors occur when running node `app.js` or `npx nodemon app.js`.