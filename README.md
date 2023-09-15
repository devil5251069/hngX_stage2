# Express.js REST API with MongoDB

## API Documentation

This documentation provides an overview of the Express.js REST API for managing user records in a MongoDB database.

---

### Standard Formats for Requests and Responses

#### Create a New Person

- **Endpoint:** `/api`
- **Method:** `POST`
- **Request Format:**
  ```json
  {
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com"
  }

#### Response Format (Success)
-    ```json
    {
    "_id": "unique_user_id",
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com"
    }

#### Fetch a Person by ID

- **Endpoint:** `/api:user_id`
- **Method:** `GET`
- **Request Format(Success):**
  ```json
  {
  "_id": "unique_user_id",
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com"
    }

#### Update a Person by ID

- **Endpoint:** `/api:user_id`
- **Method:** `PUT`
- **Request Format(Success):**
  ```json
    {
  "name": "Updated Name",
  "age": 35,
  "email": "updated.email@example.com"
    }

#### Remove a Person by ID
- **Endpoint:** `/api:user_id`
- **Method:** `DELETE`
- **Response Format(Success):**
  ```json
  {
  "_id": "unique_user_id",
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com"
  }

# Known Limitations and Assumptions
- The API assumes that MongoDB is running locally on the default port.
- Error handling is basic and may not cover all possible scenarios.
- No authentication or authorization mechanisms are implemented in this example.
