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
    }
    state = {
        plannerToDo: [] 
    }

    componentDidMount(){
        fetch("http://localhost:8080/api/todos/all").then((response) => {
              return response.json();
        })
        .then((data) => {
            console.log("todo Data",data);
            this.setState({plannerToDo: data});
        })
        //   }).then((data) => {
        //     console.log("Completed");
        //   });
    }


    handleSubmit = (event) => {
        // event.preventDefault();
        // let toDoNote ={
        //     note: this.state.note
        // }
        // console.log(toDoNote);
        // fetch("http://localhost:8080/api/new", {
        //     body: JSON.stringify({ note: this.state.Todos }),
        //     method: "POST",
        //     headers: { 
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //       }
        //   }).then((response) => {
        //     // return response.json();
        //   }).then((data) => {
        //     console.log("Completed");
        //   });
            // // On success, run the following code
            // .then(function() {
        
            //    alert("yay");
        
            // });
    }
    handleDelete = (id) => {
        console.log("id", id);
        fetch("http://localhost:8080/api/delete", {
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
    render () {
        let {plannerToDo} = this.state;
        return (
            <ToDosBox>
                <form >
                    <h1>To Do List</h1>
                    <label>Enter Here</label>
                    <input id="newNotes" type="text" value = {this.state.plannerToDo} onChange = {e=>{this.setState({plannerToDo:e.target.value})}}></input>
                    <button id="noteButton" class="btn btn-primary" onClick={this.handleSubmit}>submit</button>
                </form>
                  {plannerToDo.map((todo)=>{
                    return(
                        <h5 key = {todo.id}>
                            {todo.todo_note}
                            <button onClick={() => {this.handleDelete(todo.id)}}>Delete</button>
                        </h5>
                    )
                })}  
                
            </ToDosBox>
     
        )
    
    }
    
}
export default ToDos;

