import React, {Component} from "react";
import styled from "styled-components";

const Calendarbox = styled.div`
display: flex;
justify-content: center;
background: rgba(0, 180, 180, 0.8);
border: 5px;
border-color: grey;
border-style: solid;`



class DatePicker extends Component{
    render(){
        return(


            <Calendarbox >
                <input type = "date" />
            </Calendarbox>
        )
    }
}

export default DatePicker;