import { useDispatch, useSelector } from "react-redux"
import { sumval } from "./slicepage"

export function Page3(){
    const dispatch =useDispatch()
    const {num1, num2, sum} =useSelector(state=>state.page)
    console.log(num1,"+",num2,"=",sum)
    function showsum(){
        dispatch(sumval())
    }
    return(
        <div>
           <button onClick={showsum}>sum</button> <br />
          Sum: {sum}
        </div>
    )
}