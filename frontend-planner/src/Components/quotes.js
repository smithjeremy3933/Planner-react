import React, {Component} from 'react'
import styled from "styled-components";

const QuotesBox = styled.div`
  dislay: flex;
  flex-direction: column;
  justify-content: center;
  line-height:  ${props => props.lineHeight || "1px"};
  height: ${props => props.height || ""};
  width: ${props => props.width || ""};
  background: rgba(0, 180, 180, 0.8);
  border: 5px;
  border-color: grey;
  border-style: solid;
  border-radius: ${props => props.borderRadius || "30px"};
  padding: ${props => props.padding || "0px"}
`

class Quotes extends Component {
    constructor (props) {
        super(props);
    }
    state= {
        quotes: ""
    }
    render() {

    let {selectedQuotes} = this.props;
    return(
        <QuotesBox>
            <h2>Quote: <span id="quotesTarget"></span></h2>
        </QuotesBox>
    )
    }
}

export default Quotes;