import React from 'react'
import Task from './Tasks'
const Todo = ({}) => {
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
        
        setDones([... dones])
        setTasks([... tasks, task])
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


            <div style ={{ display: 'flex', 
            justifyContent:'center',
            marginTop: 8,
            padding: '8px 8px'
            }}>

             <div style = {{ width: '40%', 
                border: 'solid black',
                borderRadius: 5,
                marginRight: 4}}>

              <b>Tasks</b>
              <hr/>

                {
                tasks && tasks.length > 0 && tasks.map((v, i)=> {
                    return(
                        <Task key = { i } index = { i } data = { v } doneClick = { removeTask}/>
                    )
                 })
                }
         </div>

         <div style = {{ 
             width: '40%', 
             border: 'solid black',
             borderRadius: 5,
             padding: '8px 8px'}}
             >
             
            <b>
              Done
            </b>

         <hr/>

         
         {
                dones && dones.length > 0 && dones.map((v, i)=> {
                    return(
                        <div key= {i}>
                        { v }
                        <span style = {{marginLeft: 4}}>

                        <button className= "btn = btn-outline-danger btn-sm"
                        onClick = {() => removeDone(i)}>
                            Checkout
                        </button>
                        <button className= "btn = btn-outline-warning btn-sm"
                        onClick = {() => moveToTasks(i) }>
                            Undo
                        </button>
                        </span>
                    </div>
                    )
                 })
                }
       </div>
      </div>
     </div>
    </div>
    )
}

export default Todo