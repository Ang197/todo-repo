import React from 'react'
import TodoListings from './TodoListings'
const style ={
    box: {
        width: '40%', 
        border: 'solid black',
        borderRadius: 5,
        padding: '8px 8px'

    },
    app: {
        display: 'flex', 
        justifyContent:'center',
        marginTop: 8,
    }
}
    const Todo = () => {
    // tasks String[]
    const[tasks, setTasks] = React.useState([])
    const[dones, setDones] = React.useState([])

    const addTask = () => {
        let task = prompt('Please enter the new task...')
        setTasks([...tasks, task])
    }

    const removeTask = (index) => {
        const done = tasks.splice(index, 1)
        addToDone(done[0])
        setTasks([...tasks])
    }

    const addToDone = (done) => {
        setDones([...dones, done])
    }

    const removeDone = (index) => {
        let done = dones.splice(index, 1)
        setDones([...dones])

        alert(`${done[0]} was successfully checked out!`)
    }

    const moveToTasks = (index) => {
        const task = dones.splice(index, 1)
        
        setDones([...dones])
        setTasks([...tasks, task])
    }

    return(
     <div>
         <h1>Todo app</h1>
         <hr/>

         <div>
             <button className= "btn = btn-primary btn-sm"
              onClick= { ()=> addTask() }> 
             
             Add Task
             </button>


            <div style = {{...style.app  }}>
             <div style = {{...style.box, marginRight: 4}}>
              <TodoListings title = { 'Tasks' } 
              success = {{value: 'Done'}}
              successClick = { removeTask}
              data={tasks} 
              />
         </div>
         
             <div style = {{...style.box}}>
              <TodoListings title = { 'Done' } 
              danger = {{value: 'Checkout'}}
              dangerClick = { removeDone}
              warning=  {{value: 'Undo'}}
              warningClick={ moveToTasks }
              data={dones}/>
       </div>
      </div>
     </div>
    </div>
    )
}

export default Todo