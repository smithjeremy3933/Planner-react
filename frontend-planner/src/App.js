import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Time from "./Components/time"
import Quotes from "./Components/quotes";
import Weather from "./Components/weather";
import ToDos from "./Components/todos";
import Notes from "./Components/notes";
import Navbar from "./Components/navbar";
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
      temperature: 0,
      maxTemperature: 0,
      minTemperature: 0,
      cityName: "",
      plannerNotes: [],
      quotes: [],
      quote: ""
    }
  }

  componentDidMount() {
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=livermore&units=imperial&appid=${APIKey}`;

    fetch(queryURL).then((response) => {
      return response.json();
    }).then((data) => {
        //console.log(data);
        console.log(data.name);
        this.setState({ 
          temperature: data.main,
          maxTemperature: data.main,
          minTemperature: data.main,
          cityName: data,
        })
    });   
    
    fetch("http://localhost:8080/api/all")
    .then((res) => {
      return res.json()
    }).then((noteData) => {
      console.log("note", noteData);
      // console.log(noteData[0].note)
      this.setState({ 
        plannerNotes: noteData
      })
    });

    fetch("http://localhost:8080/api/quotes/all")
    .then((res) => {
      return res.json()
    }).then((quotesData) => {
      console.log("quote", quotesData);
      this.setState({ 
        selectedQuotes: quotesData
      })
    })
  }
  
  render() {
    let { temp } = this.state.temperature;
    let { temp_max } = this.state.maxTemperature;
    let { temp_min } = this.state.minTemperature;
    let { name } = this.state.cityName;
    // let { quote } = this.state
    console.log(this.state.quotesData)
    console.log(this.state.temperature);
    let selectedQuotes = this.state.selectedQuotes
    console.log(this.state.quotesData)
    // for (let i= 0; i<this.state.plannerNotes.length; i++) {
      //   console.log(this.state.plannerNotes[i])
      // };
      let  notes  = this.state.plannerNotes
      return (
        console.log(this.state.plannerNotes, "here's the state boii"),
        
      <div>
        <Navbar/>
        <Container>
          <TopContainer>
            <Time/>
            <Quotes />
             <Weather temperature={temp} maxTemperature={temp_max} minTemperature={temp_min} cityName={name}/> 
          </TopContainer>
          {/* <FullCalender/> */}
          <MidContainer>
            <ToDos/>
            <Notes plannerNotes={notes}/>
>          </MidContainer>
        </Container>
      </div>
    )
  }
}

export default App;