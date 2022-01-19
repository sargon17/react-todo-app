import Tasks from "./tasks"
import taskData from "./taskData.js"


export default function ToDoList(){
    const tasksItems = taskData.map(items =>{
        return(
            <Tasks 
                task={items.task}
                dueTime={items.taskTime.dueTime}
            />
        )
    })

    return(
        // list wrapper
        <div className="list--wrapper">
            {tasksItems}
        </div>
    )
}