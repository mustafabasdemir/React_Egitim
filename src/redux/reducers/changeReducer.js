

const changeReducer = (state ={init:["mustafa"]},action)=>{

    switch(action.type){
        case "CHANGE":
            return{
                init:action.payload
            }
        default:
            return state
    }


}

export default changeReducer;