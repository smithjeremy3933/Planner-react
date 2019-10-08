import React, {Components} from 'react'
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

const Notes = () => {
    return (
        <NotesBox>
            <h1>Notes</h1>
        </NotesBox>
    )
}

export default Notes;