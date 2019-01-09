

App Component

    const todos = {...
                    "todo 1"
                ...}

    Current Todos Component - takes the todos array as a prop
        (loop for each row in todos)
            Row Component
                Delete Button Component

    Add Todo Component
        Input Bar Component
        Add Button Compnent
            ^ Callback function used to change the state of the todos[] array in the App Component

    Search Todo Component
        Input Bar Component - takes the todos array as a prop


The App Component of our application will be the parent component of a "CurrentTodos" "AddTodos" and "SearchTodos" components. The state of AppComponent will contain an array of "todos" (most likely objects with a name and id). The todos[] array will be a prop for the CurrentTodos Component to allow it to display the list of todos in the array. The searcch todos will also take this array as a prop. The AddTodo component will use a callback function to alter the state of its parent AppComponent. 