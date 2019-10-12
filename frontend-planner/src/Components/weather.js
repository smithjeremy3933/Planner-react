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
  background: rgba(0, 180, 180, 0.8);
  border-radius: ${props => props.borderRadius || "30px"};
  padding: ${props => props.padding || "0px"}
  border: 5px;
  border-color: grey;
  border-style: solid;
`

const Button = styled.button`
  background-color: ${props => props.color || "teal"};
  color: white;
  border-radius ${props => props.borderRadius || "15px"};
  height: 30px;
  width: 100px;
  margin: 2px;
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
  width: 80px;
  margin: 2px;
`

const WeatherData = styled.p`
  margin: 3px;
  line-height: 6px;
  &:hover {
    opacity:0.9;
    background-color: yellow;
    height: 10px;
  }
`

let APIKey = "182a37ebeb5560c2e6ed0dfd20d50298";
let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=livermore&units=imperial&appid=${APIKey}`;
// let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode},US&APPID=${APIKey}`;


class Weather extends Component {
  constructor(props){
    super(props)
  }  
  render(){
    let { cityName } = this.props
    let { temperature } = this.props
    let { maxTemperature } = this.props
    let { minTemperature } = this.props
    return (
        <WeatherBox>
            <h3>Weather</h3>
            <form>
                <Input type="text" name="zipcode"></Input>
                <Button>Add Location</Button>
            </form>
            <h4>{cityName}</h4>
            <WeatherData id= "tempTargetParagraph">Current Temp: {temperature + "°F"}</WeatherData>
            <hr></hr>
            <WeatherData id = "maxTempTargetParagraph">Max Temp: {maxTemperature + "°F"}</WeatherData>
            <hr></hr>
            <WeatherData id="minTempTargetParagraph">Min Temp: {minTemperature + "°F"}</WeatherData>
        </WeatherBox>

    )
  }
}

export default Weather;