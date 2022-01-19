import ToDoList from "./toDoList"

export default function ToDoApp(){
    return(
        <div className="app--wrapper">
            <div className="header">
                <h1>Your Next Task</h1>
                <div className="input--wrapper">
                    <input type="text" placeholder="Your Next Task" />
                    <button>Save</button>
                </div>
            </div>
            <ToDoList />
        </div>
    )
}
