import React from "react";
import { ThisExpression } from "typescript";
import TodoItem from "./components/TodoItem";

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
  researchTodo: string;
  researchItems: string[];
}


class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      newTodo: "",
      researchTodo: "",
      researchItems: [],
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = this.state.todoItems.concat(this.state.newTodo)

    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }

  researchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filterItems = (query: string) => {
      return this.state.todoItems.filter(item => item.indexOf(query) > -1);
    }
    // for (let index = 0; index < this.state.todoItems.length; index++) {
    //   <div>filterItems</div>
    // }
    this.setState({
      newTodo: "",
      researchTodo: "",
    })
    console.log(filterItems(this.state.researchTodo));
    this.setState({
      researchItems: filterItems(this.state.researchTodo),
    })

  }

  researchTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      researchTodo: e.target.value,
    });
  } 

//deleteTodo = (e: React.FormEvent<HTML>)

  render() {
    const styleTodo = {
      color: "black",
      backgroundColor: "blue",
      fontFamily: "Arial"
    }
    return (
      <div>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">추가하기</label> <br />
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br />
          <button>Add #{this.state.todoItems.length + 1}</button>
        </form>
        {
          this.state.todoItems.map((item, idx) => (
            <TodoItem name={item} key={idx}/>
          ))
        }
        <br />
        <form onSubmit={this.researchSubmit}>
          <label htmlFor="search">검색하기</label> <br />
          <input type="text" id="search" value={this.state.researchTodo} onChange={this.researchTodo}/> <br />
          <button style={styleTodo}>검색하기</button>
        </form>
        {
          this.state.researchItems.map((item, idx) => (
            <TodoItem name={item} key={idx}/>
          ))
        }
      </div>
    )
  }
}

export default TodoApp;