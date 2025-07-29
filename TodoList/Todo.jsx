import { useRef } from "react"
import { addtask,clearall,removetask } from "./Slice"
import { useDispatch, useSelector } from "react-redux"

function Todo(){
    const reference=useRef("")
    const data=useSelector(state=>state.Todo.list)
    const dispatch =useDispatch()
    function handleadd(){
        const value =reference.current.value
        if(value<1){
            window.alert("enter a vlaid input")
            return
        }
        dispatch(addtask(value))
        reference.current.value=""
    }
    return(
        <div style={{backgroundColor:"black",color:"white",padding:"10px",paddingBottom:"40px",borderRadius:"10px"}}>
            <h1>Todo List</h1>
            <input type="text" placeholder="Enter a task" ref={reference}/>
            <button onClick={handleadd}>Add Task</button>
            {data.map((item,index)=>{
                return(<li style={{padding:"5px"}} key={index}>{item}<button onClick={()=>dispatch(removetask(index))}
                style={{position:"absolute" ,left:"210px"}}
                > Done</button></li>)
                })}
                {data.length>0?<span>Remaining tasks : {data.length}</span>:<></>}
            {data.length>0?<button onClick={()=>dispatch(clearall())}
                style={{position:"relative" ,left:"60px"}}
                >Clear all</button>:<></>}
        </div>
    )
}
export default Todo