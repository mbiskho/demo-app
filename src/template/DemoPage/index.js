import React from 'react'
import { connect } from 'react-redux'
import Styles from "./styles";
import {getData,postData,addItem,deleteItem} from '../DemoRedux/action'

export const Index = (props) => {
    const [box,setBox] = React.useState([])
    const [status,setStatus] = React.useState(props.postData)
    const [user,setUser] = React.useState([])
    console.log(props)
    React.useEffect(() => {
        setBox(props.items)
        setStatus(props.postData)
        setUser(props.getData)
    },[props.items,props.postData,props.getData])
    return (
        <Styles>
            <h1>Demo</h1>
            <div className="button-box">
                <button onClick={() => {props.addItem()}}>Add Items</button>
                <button onClick={() => {props.deleteItem()}}>remove item</button>
            </div>

            <div className="list-box">
                {box.length === 0 ? <React.Fragment>
                    <h1>There is no box to show</h1>
                </React.Fragment> : box.map((data,i)=>(
                    <div className="box" key={i}><p>{data.no}</p></div>
                ))
                }
            </div>

            <div className="button-box">
                <button onClick={() => {props.Get()}}>Get Data</button>
                <button onClick={() => {props.Post()}}>Post Data</button>
            </div>
            <div>
                <h1>Post Status : {status}</h1>
            </div>
            <div>
                {user.length === 0 ? <p>No Get Data</p> : user.map((data,i) =>(
                    <div className="users" key={i}>
                        <p>Name : {data.name}</p>
                        <p>username : {data.username}</p>
                    </div>
                ))}
            </div>
        </Styles>
    )
}

const mapStateToProps = (state) => {
    return {...state}
}

const mapDispatchToProps = {
    Get : getData,
    Post : postData,
    addItem,
    deleteItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
