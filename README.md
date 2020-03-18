# phonebook

This application was generated using JHipster 6.7.1, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v6.7.1](https://www.jhipster.tech/documentation-archive/v6.7.1).

## Running

First, the dependencies for JHipster should be installed first. Java 8 or above and Node.js (10+) are required. For more details, please see the "Local installation with NPM (recommended for normal users)" section at: https://www.jhipster.tech/installation/ 

Then, the MySql database for this project should be created prior to running it. Please create a database in the MySql server named "phonebook" with collation "utf8_general_ci" and then change the database connection information in src/main/resources/config/application-dev.yml (spring.datasource.url, spring.datasource.username and spring.datasource.password should be changed).

Before you can build and run this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    npm install

We use npm scripts and [Webpack][] as our build system.

Run the following commands in two separate terminals to launch the application.

    ./mvnw
    npm start
 
## Authentication

JWT token is required to access the API endpoints. 
To obain the token send a POST request to http://localhost:8080/api/authenticate with Content-type = "application/json" and the following JSON body (using default admin account for example):
{"username":"admin","password":"admin"}

The response JSON body will contain the "id_token" field which is the JWT token.

The token should be passed in the Authorization header in all the following APIs after the static "Bearer " string before it. e.g.
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU4NDU5OTM4MX0.0-e_ZYfYWGCtux3E92eDGDdLgso98srU2zfT7OhMjM_EZcjTvY9-JTHbRJxnKWfndA-l_9g_5GR2kA2NQEASKQ

## APIs

1. Create 
    Path: http://localhost:8080/api/people
    Method: POST
    Headers: 
    - Authorization: <as described above>
    - Content-type: application/json
    Body: the following JSON body:
    {
        firstName: <String, the first name of the person, required>
        lastName: <String, the last name of the person, required>
        middleName: <String, the middle name of the person, optional>
        phone: <String, the phone number of the person, required, the string must conform to the following regex: /^[0-9+\-]+$/>
        company: <String, the company of the person belongs to, optional>
        dob:  <String, the datew of birth of the person, required, the string must match the following format: "yyyy-mm-dd">
        addressLine1: <String, first line of the person's address, optional>
        addressLine2: <String, second line of the person's address, optional>
        city: <String, the city where the person is located, required>
        postalCode: <String, the postal code where the person is located, optional>
        country: <String, country where the person is located, required>
    }

    Response: the JSON above with the "id" field added which is the database id of the entity.

2. Read
    Path: http://localhost:8080/api/people
    Method: POST
    Headers: 
    - Authorization: <as described above>
    Response: A JSON array containing the People entity with id as described in the Create API above.

3. Update 
    Path: http://localhost:8080/api/people
    Method: PUT
    Headers: 
    - Authorization: <as described above>
    - Content-type: application/json
    Body: the following JSON body:
    {
        id: <integer, the database id of the entity, required>
        firstName: <String, the first name of the person, required>
        lastName: <String, the last name of the person, required>
        middleName: <String, the middle name of the person, optional>
        phone: <String, the phone number of the person, required, the string must conform to the following regex: /^[0-9+\-]+$/>
        company: <String, the company of the person belongs to, optional>
        dob:  <String, the datew of birth of the person, required, the string must match the following format: "yyyy-mm-dd">
        addressLine1: <String, first line of the person's address, optional>
        addressLine2: <String, second line of the person's address, optional>
        city: <String, the city where the person is located, required>
        postalCode: <String, the postal code where the person is located, optional>
        country: <String, country where the person is located, required>
    }

    Response: the JSON field in the Body section above with the updated values.

4. Delete
    Path: http://localhost:8080/api/people/{id}
    Method: DELETE
    Headers: 
    - Authorization: <as described above>
    Path Parameters: 
    - id: the id of the entity to be deleted. e.g. http://localhost:8080/api/people/7 to delete the entity with id = 7

    Response: HTTP status 204 when deletion is successful. Else, a HTTP 404 error response will be returned.

## Testing

To launch the application's unit and integration tests, run:

    ./mvnw verify
 
