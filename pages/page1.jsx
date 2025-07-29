import { useDispatch, useSelector } from "react-redux"
import { setvalue } from "./slicepage"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
export function Page1(){
    const num1=useSelector(state=>state.page.num1)
    console.log(num1)
    const dispatch=useDispatch()
    const reference = useRef()
    const navigate =useNavigate()
    function handleset(){
        const value = reference.current.value
        dispatch(setvalue(value))
        navigate("/page2")
    }
    return(
        <div>
            <input type="number" ref={reference}/>
            <button
            onClick={handleset}
            >set1</button>
        </div>
    )
}