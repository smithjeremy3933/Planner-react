import React, {Component} from 'react'
import styled from "styled-components";

const NotesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top centered;
  line-height:  ${props => props.lineHeight || "10px"};
  height: ${props => props.height || "100%"};
  width: ${props => props.width || "100%"};
  background: rgba(0, 180, 180, 0.8);
  border-radius: ${props => props.borderRadius || "30px"};
  padding: ${props => props.padding || "5px"}
  border: 5px;
  border-color: black;
  border-style: solid;
`

const Button = styled.button`
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

const NotesContainer= styled.div`
  padding: 20px;
`

// const CurrentNotes = styled.p`
    
// `


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
                    <h1 className="text-center">Grocery List</h1>
                    <label border="Black">Enter Here</label>
                    <input id="newNotes" type="text" value = {this.state.note} onChange = {e=>{this.setState({note:e.target.value})}}></input>
                    <button id="noteButton" class="btn btn-primary" border-radius="15px" onClick= {this.handleSubmit}>submit</button>
                </form>
                <hr></hr>
                {
                plannerNotes.length ? 
                    plannerNotes.map(note=>{
                    return(
                        <h5 className="text-center" key = {note.id}>
                            {note.note}
                            <Button id="deleteButton" className="float-right" 
                            onClick={(event) => {event.preventDefault(); this.handleDelete(note.id)}}>Delete</Button>
                            <hr></hr>
                        </h5>
                    )})
                    :
                        <div>
                            Your all stocked up!!!
                        </div>
                }

                
            </NotesBox>
     
        )
    
    }
    
}

export default Notes;