export const fetchdata=()=>{
    return async (dispatch)=>{
        dispatch({type:"load"})
        try{
            const res=await fetch("https://jsonplaceholder.typicode.com/posts")
            const data=await res.json()
            console.log(data);
            
            dispatch({type:"fetched",payload:data})

        }
        catch(error){
            dispatch({type:"error",payload:error.message})
    }
}}