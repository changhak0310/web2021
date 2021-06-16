import React from "react";
import { ThisExpression } from "typescript";
import TodoItem from "./components/TodoItem";

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      newTodo: "",
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });
    console.log(this.setState);
    
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = this.state.todoItems.concat(this.state.newTodo)

    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }

  // research = (e: ) => {
  //   const filterItems = (query) => {
  //     return todoItems.filter(snacks => snacks.indexOf(query) > -1);
  //   }
  //   this.setState({
  //     todoItems: [],
  //     newTodo: "",
  //   })
  // }

  research = (e: React.FormEvent<HTMLFormElement>) => {

    const filterItems = (query: any) => {
      return this.state.todoItems.filter(item => item.indexOf(query) > -1);
    }
    
    for (let index = 0; index < this.state.todoItems.length; index++) {
      <div>filterItems</div>
    }
    this.setState({
      todoItems: [],
      newTodo: "",
    })
  }

  render() {
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
        <form action="">
          <label htmlFor="search">검색하기</label> <br />
          <input type="text" id="search" value={this.state.newTodo} onChange={this.research}/> <br />
        </form>
        {
          this.research
        }
        
      </div>
    )
  }
}

export default TodoApp;