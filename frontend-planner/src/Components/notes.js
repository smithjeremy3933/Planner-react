import React, {Component} from 'react'
import styled from "styled-components";

const NotesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  line-height:  ${props => props.lineHeight || "1px"};
  height: ${props => props.height || "500px"};
  width: ${props => props.width || "400px"};
  background: rgba(0, 180, 180, 0.8);
  border-radius: ${props => props.borderRadius || "30px"};
  padding: ${props => props.padding || "5px"}
  border: 5px;
  border-color: grey;
  border-style: solid;
`

class Notes extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        note: "" 
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let newNote ={
            note: this.state.note
        }
        console.log(newNote);
        fetch("http://localhost:8080/api/new", {
            body: JSON.stringify({ note: this.state.note }),
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
        let {plannerNotes} = this.props;
        return (
            <NotesBox>
                <form >
                    <h1>Grocery List</h1>
                    <label>Enter Here</label>
                    <input id="newNotes" type="text" value = {this.state.note} onChange = {e=>{this.setState({note:e.target.value})}}></input>
                    <button id="noteButton" class="btn btn-primary" onClick= {this.handleSubmit}>submit</button>
                </form>
                
                {
                plannerNotes.length ? 
                    plannerNotes.map(note=>{
                    return(
                        <h5 key = {note.id}>
                            {note.note}
                            <button onClick={(event) => {event.preventDefault(); this.handleDelete(note.id)}}>Delete</button>
                        </h5>
                    )})
                    :
                        <div>
                            You don't have any notes
                        </div>
                }

                
            </NotesBox>
     
        )
    
    }
    
}

export default Notes;