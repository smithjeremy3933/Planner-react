import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Time from "./Components/time"
import Quotes from "./Components/quotes";
import Weather from "./Components/weather";
import ToDos from "./Components/todos";
import Notes from "./Components/notes"
// import FullCalender from "./Components/calender"
import styled from "styled-components";
let APIKey = "182a37ebeb5560c2e6ed0dfd20d50298";
const Container = styled.section`
  display: grid;
  margin: ${props => props.margin || "10px"};
  padding:${props => props.padding || "0px 30px"};
  grid-template-columns: ${props => props.gridTemplateColumns || ""};
  grid-gap: 30px;
`

const TopContainer = styled.section`
  display: grid;
  margin: ${props => props.margin || "0px"};
  padding:${props => props.padding || ""};
  grid-template-columns: ${props => props.gridTemplateColumns || "1fr 2fr 1fr"};
  grid-gap: 60px;
`
const MidContainer = styled.section`
  display: grid;
  margin: ${props => props.margin || "0 auto"};
  padding:${props => props.padding || ""};
  grid-template-columns: ${props => props.gridTemplateColumns || "2fr 1fr"};
  grid-gap: 60px;
`

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      temperature: undefined,
      zipcode: undefined
    }
  }

  getWeather =() => {
    fetch(queryURL).then(function(response) {
      return response.json();
    }).then(function(data) {
        console.log(data);
        console.log(data.main.temp);
        // currentTemp= data.main.temp;
        // this.setState({temperature: this.state.currentTemp})
    });
  }

  render() {
    return (
      <div>
        <Container>
          <TopContainer>
            <Time/>
            <Quotes/>
            <Weather/>
          </TopContainer>
          {/* <FullCalender/> */}
          <MidContainer>
            <ToDos/>
            <Notes/>
>          </MidContainer>
        </Container>
      </div>
    )
  }
}

let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=livermore&units=imperial&appid=${APIKey}`;

// fetch(queryURL).then(function(response) {
//   return response.json();
// }).then(function(data) {
//     console.log(data);
//     console.log(data.main.temp);
// });

export default App;