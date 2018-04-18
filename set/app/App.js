import React from "react";
export default class App extends React.Component{
    constructor(){
        super()
        this.state = {
            r:1,
            g:1,
            b:1,
            a:1
        }
    }
    setColor(k,v){
        this.setState({
            [k]:v
        })
    }
    render(){
        return <div>
            <div
                style={{
                    "width":"200px",
                    "height":"200px",
                    "background":`rgba(${this.state.r},${this.state.g},${this.state.b},${this.state.a})`
                }}
            ></div>
            <p>
                <input 
                    type="range" 
                    min = {0}
                    max = {255}
                    value = {this.state.r}
                    onChange = {(e)=>{
                        this.setColor("r",e.target.value) 
                    }}
                />
                <span>{this.state.r}</span>
            </p>
            <p>
                <input
                    type="range"
                    min={0}
                    max={255}
                    value={this.state.g}
                    onChange={(e) => {
                        this.setColor("g", e.target.value)
                    }}
                />
                <span>{this.state.g}</span>
            </p>
            <p>
                <input
                    type="range"
                    min={0}
                    max={255}
                    value={this.state.b}
                    onChange={(e) => {
                        this.setColor("b", e.target.value)
                    }}
                />
                <span>{this.state.b}</span>
            </p>
            <p>
                <input
                    type="range"
                    min={0}
                    max={1}
                    value={this.state.a}
                    step = {0.01}
                    onChange={(e) => {
                        this.setColor("a", e.target.value)
                    }}
                />
                <span>{this.state.a}</span>
            </p>
        </div>
    }
};

