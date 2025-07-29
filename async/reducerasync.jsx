const initialState={
    loading:false,
    data:[],
    error:null
}
export function reducer(state=initialState,action){
    switch(action.type){
        case "load":{
            return {...state,loading:true}
        }
        case "fetched":{
            return {...state,data:action.payload,error:null,loading:false}
        }
        case "error":{
            return {...state,error:action.payload}
        }
        default:{
            return state
        }
    }
}