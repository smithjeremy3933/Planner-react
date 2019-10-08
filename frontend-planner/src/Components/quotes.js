import React, {Components} from 'react'
import styled from "styled-components";

const QuotesBox = styled.div`
  dislay: flex;
  flex-direction: column;
  justify-content: center;
  line-height:  ${props => props.lineHeight || "1px"};
  height: ${props => props.height || ""};
  width: ${props => props.width || ""};
  background-color: white;
  border-radius: ${props => props.borderRadius || "30px"};
  padding: ${props => props.padding || "0px"}
`

const Quotes = (props) => {
    return(
        <QuotesBox>
            <h2>Quote: <span id="quotesTarget"></span></h2>
        </QuotesBox>
    )
}

export default Quotes;