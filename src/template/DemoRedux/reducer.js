import { combineReducers } from "redux";
import {getData,postData } from "./action"
import {GET_DATA,POST_DATA,ADD_ITEM,DELETE_ITEM} from './type.js'


const getReducer = (state=[],action)=>{
    switch(action.type){
        case GET_DATA:
            if(action.payload.response){
                let newItem = state
                action.payload.data.map(datas=>{
                    newItem = [...newItem,datas]
                })
                return newItem
            }else{
                return state
            }
        default:
            return state
    }
}

const postReducer = (state='No Post',action)=>{
    switch(action.type){
        case POST_DATA:
            if(action.status === 1){
                return 'Post Success'
            }else{
                return 'Post Failure'
            }
        default:
            return state
    }
}

const addReducer = (state=[],action)=>{
    switch(action.type){
        case ADD_ITEM:
            let lastElement = 0
            if(state.length > 0)
                lastElement = state[state.length-1].no
            let newerElement = lastElement + 1
            return [...state, {'no' : newerElement}]
        case DELETE_ITEM:
            if(state.length > 0){
                let len = state.length
                return state.slice(0,len-1)
            }else{
                return state
            }
        default:
            return state
    }
}


export default combineReducers({
    getData : getReducer,
    postData : postReducer,
    items : addReducer,
})