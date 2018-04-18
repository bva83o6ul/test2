import React from "react";
import {connect} from "react-redux";
import Todoitem from "./Todoitem.js";
class TodoBd extends React.Compinent{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.show=="ALL"){
            var todos =this.props.todos;
        }else if(this.props.show=="ONLYDONE"){
            var todos = this.props.todos.filter(item=>item.done);
        }else if(this.props.show =="ONLYNOTDONE"){
            var todos =this.props.todos.filter(item=>!item.done)
        }
        return <div>
            {todos.map((item)=>{
                return <Todoitem
                    key={item.id}
                    item={item}
                    delTodo={this.props.delTodo.bing(this)}
                    changeTodo = {this.props.changeTodo.bing(this)
                    }
                >
                </Todoitem>
            })}
        </div>
    }
}
export default connect(
    (state)=>{
        return {
            todos:state.todos,
            show:state.show
        }
    },
    (dispatch)=>{
        return {
            delTodo(id){
                dispatch({"type":"DELTODO",id})
            },
            changeTodo(id,k,v){
                dispatch({"type":"CHANGETODO",id,k,v})
            }
        }
    }
)(TodoBd);