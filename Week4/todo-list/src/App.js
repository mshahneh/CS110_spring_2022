import logo from './logo.svg';
import './App.css';
import ListItem from "./Components/ListItem"
import React from 'react';

class App extends React.Component { //props, state
  constructor(props){
    super(props)
    this.state = {
      "tasks":[],
      "input":''
    }
    this.addTodo = this.addTodo.bind(this);
    this.changeUserInput = this.changeUserInput.bind(this);
  }

  addTodo(){
    if (this.state.input !== ''){
      let tasks = this.state.tasks
      tasks.push(this.state.input)
      this.setState({"tasks":tasks, "input":''})
    }
  }

  changeUserInput(v){
    this.setState({"input": v})
  }

  render(){
    return (
      <div className="App">
        <div> <input type="text" value={this.state.input} onChange={(e) => this.changeUserInput(e.target.value)} /> <button onClick={this.addTodo}>submit</button></div>
        {this.state.tasks.map((value, index)=>
        <ListItem text = {value} depth={0}/>
        )}
      </div>
    )
  }
}


export default App;
