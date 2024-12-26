# TODO App

```
As a user
I want to be able to add a TODO item
so I can track the things I want to do.
```

The app has two parts, a frontend built in React and a Backend built in NodeJS.

The backend exposes an API to fetch the TODO items, that are be displayed in the page.

## File Structure

TODO-App/
├── backend/
│ ├── controllers/
│ │ └── todoController.js
│ ├── repositories/
│ │ └── todoRepository.js
│ ├── routes/
│ │ └── todoRoutes.js
├── servies/
│ │ └── todoServices.js  
 ├── tests/
│ │ └── todoRepository.test.js  
│ │ └── todoServices.test.js  
│ ├── app.js
│ ├── server.js
│ └── package.json
├── src/
│ ├── TodoApp.jsx
│ ├── index.js
│ ├── actions/
│ │ └── index.js
│ │ └── types.js
│ ├── components/
│ │ └── TodoForm.jsx
│ │ └── TodoItem.jsx
│ │ └── TodoList.jsx
│ ├── reducers/
│ │ └── index.js
│ └── store/
│ └── index.js
├── public/
│ └── index.html
├── README.md
└── package.json

## Backend

You can find it in the `/backend` directory. It's built in Express and stores the TODO items in memory.

- GET /api/todo

## Frontend

You can find it in the `src` folder. It has been build with React and Redux. The list of todos are fetched asynchronously from the backend via Redux-thunk.

You can assume the backend is running under `http://localhost:9091/api/todo`

## API Endpoints

- `GET /api/todos`: Fetch all TODO items.
- `POST /api/todos`: Add a new TODO item.
- `PUT /api/todos/:id`: Update an existing TODO item.
- `DELETE /api/todos/:id`: Delete a TODO item.

## Starting the application

- Backend: (In the backend folder)

```shell
npm install
npm start # Start the server in the 9091 port
```

- Frontend: (In the root folder)

```shell
npm install
npm start # Starts the app in http://localhost:3000
```

# Contributing

Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.
