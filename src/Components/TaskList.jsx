import {Task} from "./Task";


const mockData = [
  {
    id: 1,
    title: 'note 1'
  },
  {
    id: 2,
    title: 'note 2'
  }
]

export const TaskList = ({tasks = mockData}) => {

  return (
    <div className="task-list">
      {tasks.map(task => <Task key={task.id} id={task.id} title={task.title}/>)}
    </div>
  )
}