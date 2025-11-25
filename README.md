###📌 Todo App (React + Redux)
This is a simple Todo Management Application built using:

React
React-Redux
JavaScript
Redux Store + Reducer
Local UI state + global Redux state

###You can:

Add tasks
Edit tasks
Delete tasks
Search tasks by name or status
Store date & time

###Display tasks in a table

📁 Project Structure
src/
│── components/
│     └── Todo.js
│── redux/
│     ├── store.js
│     └── reducer.js
│── App.js
│── index.js
│── todo.css
│── README.md

###⚙️ Installation
npm install
npm install redux react-redux
npm start

###🚀 State Flow
1. User Enters Task

Task, Date, Time → local state (useState)

On submit → dispatch → { type:"add", payload:{...} }

2. Reducer Updates Store

Adds task

Edits task

Removes task

3. Component Uses useSelector()

Displays tasks in a table.

