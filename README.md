# asperitas

Asperitas is a full stack reddit clone that I wrote to learn more about Node.js, React, and NoSQL databases. The name asperitas comes from a type of [cloud](https://en.wikipedia.org/wiki/Asperitas_(cloud)).

## Installation

### Prerequisites

* node
* npm
* mongodb

1. Clone this repository

2. Install server dependencies
    ```bash
    $ npm install
    ```
3. Install client dependencies
    ```bash
    $ cd client
    $ npm install
    ```

## Run the app

1. Start mongodb locally
    ```bash
    $ mongod
    ```
2. Start the server
    ```bash
    $ npm start
    ```
3. Start the client
    ```bash
    $ cd client
    $ npm start
    ```
4. Browse to `http://localhost:3000/`

## MongoDB Cloud Config
By default the server will be connected to local mongod server. But if you want to connect a cloud MongoDB create a environment variable called DATABASE_URL and puth MongoDB Cloud URI as its value.

## Email Handler Config
For email handling server is using SendGrid:
https://sendgrid.com/

To configure you need to add these environment variables: 
1. SENDGRID_API_KEY (The API key provided by sendgrid)
2. SENDGRID_SENDER (Sender email address of the app)
3. SERVER_URL (Complete url of server e.g http://localhost:8080 for properly managing redirections and links)


## Testing

### Server
Make sure mongodb is running before testing the server.
```bash
$ npm test
```

### Client
```bash
$ cd client
$ npm test
```

## License

This project is made available under the **MIT License**.
