import React from 'react'

const Tasks = ({data, index, doneClick}) =>{
    return(
        <div>
            { data }
                   <span style = {{marginLeft: 4}}>
                   <button className= "btn = btn-primary btn-sm"
                    onClick = {() => doneClick(index)}>
                    Done
                  </button>
                  </span>
            </div>
            
    )
}


export default Tasks