import React, {Components} from 'react'
import styled from "styled-components";
import moment from "moment";

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height:  ${props => props.lineHeight || "1px"};
  height: ${props => props.height || "200px"};
  width: ${props => props.width || "100%"};
  background: rgba(0, 180, 180, 0.8);
  border: 5px;
  border-color: grey;
  border-style: solid;
  border-radius: ${props => props.borderRadius || "30px"};
  padding: ${props => props.padding || "0px"}
`
let currentDate = moment().format('MMMM Do YYYY')
let currentTime = moment().format('h:mm:ss a')

const Time = (props) => {
    return (

        <TimeBox>
            <h3 className="text-center">Time</h3>
            <h3 className="text-center"><span  className="text-center"id="dateTarget">{currentDate}</span></h3>
            <h3 className="text-center"><span  className="text-center"id="timeTarget">{currentTime}</span></h3>
        </TimeBox>
    )
}


export default Time; 