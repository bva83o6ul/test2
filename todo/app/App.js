import React from "react";
import {connect} from "react-redux";
import TodoBd from "./components/TodoBd.JS"
import TodoFt from "./components/TodoFt.JS"
import TodoHd from "./components/TodoHd.JS"
class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <TodoBd></TodoBd>
            <TodoFt></TodoFt>
            <TodoHd></TodoHd>
        </div>
    }
};
export default connect()(App);