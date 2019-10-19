import React, {Component} from 'react'
import styled from "styled-components";
import moment from "moment";



const ToDosBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height:  ${props => props.lineHeight || "1px"};
  height: ${props => props.height || "100%"};
  width: ${props => props.width || "100%"};
  background: rgba(0, 180, 180, 0.8);
  border-radius: ${props => props.borderRadius || "30px"};
  padding: ${props => props.padding || "0px"};
  border: 5px;
  border-color: grey;
  border-style: solid;
`

const Button = styled.button`
  background-color: ${props => props.color || "teal"};
  color: white;
  border-radius ${props => props.borderRadius || "15px"};
  height: 30px;
  width: 100px;
  margin: 2px;
  &:hover {
    opacity:0.9;
  }

  span {
    color: red
  }
`

const DeleteButton = styled.button`
  background-color: ${props => props.color || "red"};
  color: white;
  border-radius ${props => props.borderRadius || "15px"};
  height: 30px;
  width: 90px;
  margin: 0px;
  &:hover {
    opacity:0.9;
  }

  span {
    color: red
  }
`
const Input = styled.input`
  border-radius ${props => props.borderRadius || "12px"};
  height: 30px;
  width: 80px;
  margin: 2px;
`

const TodosContainer= styled.div`
  padding: 20px;
`
// if (newNotes === " ") {
//     alert("yay")
// }

class ToDos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            submittedTodo: "",
            submittedTime: ""
        }
    }

    
    formValidation(){
        if (document.getElementById("newNotes").value === "") {
            alert("yay");
        }
    }

    componentDidMount(){
        fetch("http://localhost:8080/api/todos/all").then((response) => {
              return response.json();
        })
        .then((data) => {
            this.setState({todos: data});
        })
    }


    handleSubmitToDo = (event) => {
        event.preventDefault();
        let toDoNote ={
            todo: this.state.submittedTodo,
            newTime: this.state.submittedTime
        }
        fetch("http://localhost:8080/api/todos/new", {
            body: JSON.stringify({ todo_note: this.state.submittedTodo,
                                   todos_time: this.state.submittedTime }),
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
          }).then((response) => {
            // return response.json();
            if (response === "") {
                alert("yay")
            }
          }).then((data) => {
            if (data === "") {
                alert("yay")
            }
            console.log("Completed");
            window.location.reload();
          });
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
        console.log(this.state.todos);

        return (
            <ToDosBox>
                <form >
                    
                    <h1 className="text-center">To Do List</h1>
                    <TodosContainer className="container">
                    <div className="row">
                    <h3 className="col">Enter your info here!</h3>
                    <Input className="col" placeholder="Add a note here!" id="newNotes" name="submittedTodo" type="text" onChange={this.handleChange}></Input>
                    <Input className="col" placeholder="Add a time or duration!" id="newNotes" name="submittedTime" type="text" onChange={this.handleChange}></Input>
                    <Button id="noteButton" className="col" onChange= {this.formValidation} onClick={this.handleSubmitToDo}>submit</Button>
                    </div> 
                    </TodosContainer>
                </form>
                <TodosContainer className="container">
                    <div className="row">
                        <h3 className="col">ToDo</h3>
                        <h3 className="col">Time/Duration</h3>
                        <h3 className="col">Delete Button</h3>
                    </div>

                </TodosContainer>
              
                {this.state.todos.map((todo)=>{
                    return(
                        <TodosContainer className="container">
                        <div className="row">
                        <h5 className="col" key = {todo.id}>
                            {todo.todo_note}
                        </h5>
                        <h5 className="col" key = {todo.id}>{todo.todos_time}</h5>
                        <DeleteButton className="col" onClick={() => {this.handleDeleteToDo(todo.id)}}>Delete</DeleteButton>
                        <hr></hr>
                        </div>
                        </TodosContainer>
                    ) 
                })}   
                
            </ToDosBox>
     
        )
    
    }
    
}
export default ToDos;