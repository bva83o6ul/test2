import React from "react";
import {connect} from "react-redux";
class TodoHd extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <input 
                type="text"
                ref = "titleTxt"
            />
            <button onClick={()=>{
                this.props.addTodo(this.reft.titleTxt.value)
            }}>添加</button>
        </div>
    }
}
export default connect(
    null,
    (dispatch)=>{
        return {
            addTodo(title){
                dispatch({"type":"ADDTODO",title})
            }
        }
    }
)(TodoHd)