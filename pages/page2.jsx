import { useDispatch, useSelector } from "react-redux"
import { setvalue2 } from "./slicepage"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
export function Page2(){
    const num2=useSelector(state=>state.page.num2)
    console.log(num2)
    const dispatch =useDispatch()
    const reference =useRef()
    const navigate =useNavigate()
    function handleset2(){
        const value=reference.current.value
        dispatch(setvalue2(value))
        navigate("/page3")
    }
    return(
        <div>
            <input type="number" ref={reference} />
            <button
            onClick={handleset2}
            >set2</button>
        </div>
    )
}