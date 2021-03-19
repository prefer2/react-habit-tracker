import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle }) => {
    
    return (
        <div>
         {tasks.map((task)=>( //making task as a list
         <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>
         ))}   
        </div>
    )
}

export default Tasks
