import { SET_COUNTER } from "../constans";
// part 2 ACTION DEF

export const setCounter=(counter)=>(dispatch)=>{
    dispatch({
        type:SET_COUNTER,
        payload:counter,
    })

}