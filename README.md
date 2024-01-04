# Getting Started

## 1. Start the Database

Start the database and establish a connection to the DB by reading environment variables. Use the following command:

```
docker-compose up postgres
```

## 2. Start the Server

Launch the server and connect to the DB by reading environment variables. Run the following command:

```
npm run start:dev
```

Now, your server should be up and running, connecting to the database using the URL obtained from environment variables.
