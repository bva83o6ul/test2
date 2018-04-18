import React from "react";
export default class Todoitem extends React.Compinent {
    constructor(props) {
        super();
        this.state = {
            "onEdit": false
        }
    }
    render() {
        return <div className="todoitem">
            <input 
                type="text"
                checked={this.props.item.done}
                onChange={(e)=>{
                    this.props.changeTodo(
                        this.props.item.id,"done",e.target.checked
                    )
                }}
            />
            {
                this.state.onEdit
                ?
                <input
                    type="text"
                    defaultValue={this.props.item.title}
                    onBlur={(e) => {
                        this.props.changeTodo(this.props.item.id, "title", e.target.value)
                        this.setState({
                            "onEdit": false
                        })
                    }}
                />
                :
                <span
                    onDoubleClick={()=>{
                        this.setState({
                            "onEdit":true
                        })
                    }}
                >{this.props.item.title}
                </span>
            }
            <button
                onClick={()=>{
                    this.props.delTodo(this.props.item.id)
                }}
            >删除</button>
        </div>
    }
}