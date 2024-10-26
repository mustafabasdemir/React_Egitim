import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk"
import changeReducer from "./reducers/changeReducer"

const initState ={


}


const reducers = combineReducers({
    change:changeReducer

})


const store = createStore(reducers,initState,composeWithDevTools(applyMiddleware(thunk)))

export default store;