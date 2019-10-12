import React, {Component} from 'react'
import styled from "styled-components";

const NotesBox = styled.div`
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

class Notes extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        let {plannerNotes} = this.props;
        return (
            <NotesBox>
            <h1>{plannerNotes}</h1>
            </NotesBox>

    // <ul>{this.state.plannerNotes.map((notesData) => {
    //     `               return <li key={notesData.note}>{notesData.note}</li>`
    //                 })}
    //                 </ul>
        )
    
    }
    
}

export default Notes;