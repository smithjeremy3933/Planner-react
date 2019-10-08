import React, {Component} from 'react'
import styled from "styled-components";
let currentTemp =0;

const WeatherBox= styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  display: grid:
  grid-template-rows: ${props => props.gridTemplateRows || "1fr 1fr 1fr 1fr 1fr 1fr"};
  line-height:  ${props => props.lineHeight || "1px"};
  height: ${props => props.height || "200px"};
  width: ${props => props.width || "200px"};
  background-color: white;
  border-radius: ${props => props.borderRadius || "30px"};
  padding: ${props => props.padding || "0px"}
`

const Button = styled.button`
  background-color: ${props => props.color || "red"};
  color: white;
  border-radius ${props => props.borderRadius || "15px"};
  height: 30px;
  width: 100px;
  margin: 0 auto;
  &:hover {
    opacity:0.9;
  }

  span {
    color: red
  }
`

const Input = styled.input`
  border-radius ${props => props.borderRadius || "15px"};
  height: 30px;
  width: 100px;
`

let APIKey = "182a37ebeb5560c2e6ed0dfd20d50298";
let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=livermore&units=imperial&appid=${APIKey}`;
// let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode},US&APPID=${APIKey}`;


class Weather extends Component {
  constructor(props){
    super(props)
  }  
  render(){
    let { temperature } = this.props
    return (
        <WeatherBox>
            <form>
                <Input type="text" name="zipcode"></Input>
                <Button>Add Location</Button>
            </form>
            <h4>Weather conditions in: <span id="weatherLocationTarget"></span></h4>
            <p id= "tempTargetParagraph">Current Temp: {temperature}
            <span id="tempTarget"></span></p>
            <p id = "maxTempTargetParagraph">Max Temp: <span id="maxTempTarget"></span></p>
            <p id="minTempTargetParagraph">Min Temp: <span id="minTempTarget"></span></p>
        </WeatherBox>

    )
  }
}

// fetch(queryURL).then(function(response) {
//   return response.json();
// }).then(function(data) {
//     console.log(data);
//     console.log(data.main.temp);
//     currentTemp= data.main.temp;
// });


export default Weather;