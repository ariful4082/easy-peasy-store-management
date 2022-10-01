import { action, persist } from "easy-peasy";

const counter = persist(
    {
    
  
        count: 0,
      
        increment: action((state, payload)=>{
              state.count= state.count+1
        }),
        decrement: action((state,payload)=>{
          if(state.count > 0){
              state.count = state.count-1
          }
          state.count
        })
      
      
      }
)
export default counter