import React, {Component} from 'react'
import styled from "styled-components";
import APIKey from "./keys"

let clickedCity = "";

const WeatherBox= styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  display: grid:
  grid-template-rows: ${props => props.gridTemplateRows || "1fr 1fr 1fr 1fr 1fr 1fr"};
  line-height:  ${props => props.lineHeight || "1px"};
  height: ${props => props.height || "200px"};
  width: ${props => props.width || "100%"};
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
  border-radius ${props => props.borderRadius || "12px"};
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

let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=livermore&units=imperial&appid=${APIKey}`;
// let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode},US&APPID=${APIKey}`;


class Weather extends Component {
  constructor(props){
    super(props)
  }  
  state = {
      zipcode: 0
  }
  
  handleWeatherSubmit = (event) => {
    event.preventDefault();
    let newZipcode = {
      zipcode: this.state.zipcode
    }
    console.log(newZipcode);
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${newZipcode.zipcode},US&units=imperial&appid=${APIKey}`;

    fetch(queryURL).then((response) => {
      return response.json();
    }).then((data) => {
        //console.log(data);
        console.log(data.name);
        console.log(this.state.zipcode)
        console.log(this.state.temperature)
        clickedCity = data.name;
        this.setState({ 
          // zipcode: event.target.value,
          clickedTemperature: data.main,
          clickedMaxTemperature: data.main,
          clickedMinTemperature: data.main,
          clickedCityName: data,
        })
    });   
  }

  handleToggle = () => {
    this.setState({ isOn : !this.state.isOn})
  }

  render(){
    let clickedTemperature = this.props;
    let clickedCityName = this.props
    let { cityName } = this.props
    let { temperature } = this.props
    let { maxTemperature } = this.props
    let { minTemperature } = this.props
    console.log(this.state.zipcode)
    console.log(this.props)
    console.log(this.props.cityName)
    return (
        <WeatherBox>
            <h5 className="text-center">Weather</h5>
            <form>
                <Input type="text" name="zipcode" value = {this.state.zipcode} onChange = {e=>{this.setState({zipcode:e.target.value})}}></Input>
                <Button className="float-right" type="button" onClick={this.handleToggle} onClick={this.handleWeatherSubmit}>New</Button>
            </form>
            <h6 className="text-center">{this.state.isOn ? this.props.clickedCityName : this.props.cityName }</h6>
            <WeatherData className="text-center" id= "tempTargetParagraph">Current Temp: {temperature + "°F"}</WeatherData>
            <hr></hr>
            <WeatherData className="text-center" id = "maxTempTargetParagraph">Max Temp: {maxTemperature + "°F"}</WeatherData>
            <hr></hr>
            <WeatherData className="text-center" id="minTempTargetParagraph">Min Temp: {minTemperature + "°F"}</WeatherData>
         
        </WeatherBox>

    )
  }
}

export default Weather;