# TrybeSmith

This project was developed during the web development course at [Trybe](https://www.betrybe.com/).

TrybeSmith is a REST API of type CRUD developed with Node.js, Express, TypeScript, MySQL, JOI and JsonWebToken.

## Intallation

Clone the project
```bash
git clone git@github.com:VitorCorrea18/trybesmith-API.git
```
**Now you can run it with NodeJs or Docker**

<details>
  <summary><strong>Running with NodeJs 👉</strong></summary><br />
  
  ## NodeJS
  
  In the project's folder install the dependencies
  ```bash
  npm install
  ```
  
  Create a **.env** file in the app's root directory with the variables for your Mysql server connection. EX:
  ```bash
  MYSQL_HOST = 127.0.0.1 || localhost
  MYSQL_USER = root
  MYSQL_PASSWORD = password
  ```
  Create the database manualy using the Trybesmith.sql file ar the root directory or run this command at the root directory
  ```bash
  npm run restore
  ```
  Start the application with
  ```bash
  npm start
  ```
</details>

<details>
  <summary><strong>Running with Docker 👉</strong></summary><br />
  
  ## Docker
  
  Run the docker-compose script
  ```bash
  docker-compose up -d
  ```
  Enter the app's container 
  ```bash
  docker exec -it trybesmith bash
  ```  
> The above command will give access to the container terminal where the app is running so
> the terminal commands that follows should be typed here.

  In the project's folder install the dependencies
    ```bash
    npm install
    ```
  Create a **.env** file in the app's root directory with the variables for your Mysql server connection. EX:
  ```bash
  MYSQL_HOST = 127.0.0.1 || localhost
  MYSQL_USER = root
  MYSQL_PASSWORD = password
  ```
  Create the database manualy using the **Trybesmith.sql** file at the root directory or run this command at the root directory
  ```bash
  npm run restore
  ```
  Start the application with
  ```bash
  npm start
  ```

</details>

# Endpoints:

## GET`/products`
- The endpoint queries the database;
- Returns status 200 and all bank products;

## POST `/products`
- The endpoint registers a new product;
- The endpoint must receive the following structure:

```json
  {
    "name": "Longsword",
    "amount": "30 gold pieces"
  }
```
- If any data is not informed, the API returns status 400 and an error message;
- If the registration is successful, the API returns status 201 and product data;

## POST `/users`;
- The endpoint registers a new user;
- The endpoint must receive the following structure:
```json
{
  "username": "string",
  "class": "string",
  "level": 1,
  "password": "string"
}
```
- If any data is not informed, the API returns status 400 and an error message;
- If the registration is successful, the API returns status 201 and an access token;

## GET `/orders`.
- The endpoint queries the database;
- The route returns status 200 and the orders and product `id`s associated with them.

## POST `/login`
- The route receives the `username` and `password` fields, and these fields are validated in the database;
- A `JWT` token is generated and returned if successful;
- The endpoint must receive the following structure:
```json
  {
    "username": "string",
    "password": "string"
  }
```
- If the data is incorrect, the API returns status 400 and an error message;

## 6 - POST `/orders`
- The endpoint registers a new request;
- The request will only be created if the user is logged in (send the token through the request header using the Authorization key);
- The orders sent are saved in the `Orders` table and the `Products` table is updated in all products with the `id` included in the `productsIds` key of the requisition, and adding in these products the `orderId` of the newly created order;
- The endpoint must receive the following structure:
```json
  {
    "productsIds": [1, 2]
  }
```
- If the token or json data is incorrect, the API returns status 400 and an error message;
