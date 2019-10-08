import React, {Components} from 'react'
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

const ToDos = () => {
    return(
        <ToDosBox>
            <h1>h1</h1>
        </ToDosBox>
    )
}

export default ToDos;