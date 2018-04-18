import React from "react";
import {connect} from "react-redux";
import classnames from "classnames";
class TodoFt extends React.Compinent{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <p>
                当前一共有{this.props.todos.length}条todo,做完了{
                    this.props.todos.filter(item=>item.done).length}条，没做完{this.props.todos.filter(item=>!item.done).length}条。
            </p>
            <p>
                <button
                    onClick={()=>{
                        this.props.changeShow("ALL");
                    }}
                    className = {classnames({
                        "cur":this.props.show =="ALL"
                    })}
                >
                看所有的Todos</button>
                <button
                    className={classnames({"cur":this.props.show=="ONLYDONE"})
                    }
                    onClick={()=>{
                        this.props.changeShow("ONLYDONE");
                    }}
                >看已经昨晚的Todos
                </button>
                <button
                    className = {classnames({
                        "cur":this.props.show =="ONLYNOTDONE"
                    })}
                    onClick = {()=>{
                        this.props.changeShow("ONLYNOTDONE")
                    }}
                >看未做完的
                </button>
            </p>
        </div>
    }
}
export default connect(
    (state)=>{
        return{
                todos:state.todos,
                show:state.show
            }
        },
        (dispatch)=>{
            return {
                changeShow(show){
                    dispatch({"tyoe":"CHANGESHOW",show})
                }
            }
        }
)(TodoFt);