## Objective 
* VSCode dev container environemt setup to node-js environemt with Mongodb and Mongo-express. 
* Developing is using VSCode IDE inside the container. You host PC can clean up, since you don't need to install many packages etc. 

## Get Start into dev container
1. git clone this project.
2. Open in VSCode, 
 - Press [F1] -> Open folder in Container -> choose the project folder.
3. Get start the container env. 
    ```
        npm install 
        npm run start
    ```

[Optional] In your host PC, http://localhsot:8081 
 user: admin
 password: admin
 Should find a School Database there. That's it!


## Reference: 
Mongo CRUD code: 
- https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial
- https://github.com/mongodb-developer/mongodb-node-crud-example