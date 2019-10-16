import React, {Component} from 'react'
import styled from "styled-components";

const ToDosBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height:  ${props => props.lineHeight || "1px"};
  height: ${props => props.height || "500px"};
  width: ${props => props.width || "300px"};
  background-color: white;
  border-radius: ${props => props.borderRadius || "30px"};
  padding: ${props => props.padding || "0px"}
`


class ToDos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            submittedTodo: ""
        }
    }


    componentDidMount(){
        fetch("http://localhost:8080/api/todos/all").then((response) => {
              return response.json();
        })
        .then((data) => {
            console.log("todo Data",data);
            this.setState({todos: data});
        })
        //   }).then((data) => {
        //     console.log("Completed");
        //   });
    }


    handleSubmitToDo = (event) => {
        event.preventDefault();
        let toDoNote ={
            todo: this.state.submittedTodo
        }
        // alert("Test")
        console.log(this.state.submittedTodo);
        fetch("http://localhost:8080/api/todos/new", {
            body: JSON.stringify({ todo_note: this.state.submittedTodo }),
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
          }).then((response) => {
            // return response.json();
          }).then((data) => {
            console.log("Completed");
          });
            // // On success, run the following code
            // .then(function() {
        
            //    alert("yay");
        
            // });
    }
    handleDeleteToDo = (id) => {
        console.log("id", id);
        fetch("http://localhost:8080/api/todos/delete", {
            body: JSON.stringify({ id: id }),
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
          }).then((response) => {
             //return response.json();
          }).then((data) => {
            console.log("Completed");
            window.location.reload();
          });
    }

    handleChange = (event) => {
        console.log(event.target.name)
        console.log({[event.target.name]: event.target.value} );
        this.setState({[event.target.name]: event.target.value} )
    }


    render () {
        console.log(this.state.todos);
        return (
            <ToDosBox>
                <form >
                    <h1>To Do List</h1>
                    <label>Enter Here</label>
                    <input id="newNotes" name="submittedTodo" type="text" onChange={this.handleChange}></input>
                    <button id="noteButton" class="btn btn-primary" onClick={this.handleSubmitToDo}>submit</button> 
                </form>
              
                {this.state.todos.map((todo)=>{
                    return(
                        <h5 key = {todo.id}>
                            {todo.todo_note}
                            <button onClick={() => {this.handleDeleteToDo(todo.id)}}>Delete</button>
                        </h5>
                    ) 
                })}   
                
            </ToDosBox>
     
        )
    
    }
    
}
export default ToDos;

