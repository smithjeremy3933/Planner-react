import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Time from "./Components/time"
import Quotes from "./Components/quotes";
import Weather from "./Components/weather";
import ToDos from "./Components/todos";
import Notes from "./Components/notes";
import Navbar from "./Components/navbar";
import DatePicker from "./Components/DatePicker"
// import FullCalender from "./Components/calender"
import styled from "styled-components";
let newZipcode = 0;
let APIKey = "182a37ebeb5560c2e6ed0dfd20d50298";
const Container = styled.section`
  display: grid;
  width: 85%;
  margin-top: 30px;
  margin: ${props => props.margin || "0 auto"};
  padding:${props => props.padding || "30px"};
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
  margin: ${props => props.margin || "0"};
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
      // quote: "",
      // author:"",
      randomQute: {
        quote: "",
        author: ""
      },
      zipcode: 0
    }
  }

  getQuote = () =>{
    fetch("http://localhost:8080/api/quotes/all")
    .then((res) => {
      return res.json()
    }).then((quotesData) => {
      console.log("quote", quotesData);
      let quoteIndex = Math.floor(Math.random() * quotesData.length);
      this.setState({ 
        // selectedQuotes: quotesData[Math.floor(Math.random() * quotesData.length)],
        randomQute: {
          quote: quotesData[quoteIndex].quote,
          author: quotesData[quoteIndex].author
        }
        //  quotesData[Math.floor(Math.random() * quotesData.length)],
      
      })
    })
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
      console.log(noteData[0].note)
      this.setState({ 
        plannerNotes: noteData
      })
    });

    fetch("http://localhost:8080/api/todos/all")
  .then((res) => {
    return res.json()
  }).then((toDoData) => {
    // console.log("toDo", toDoData);
    // console.log(toDoData[0].note)
    this.setState({ 
      toDoNotes: toDoData
    })
  })

    this.getQuote();
    // this.handleWeatherSubmit();
  }

  
  
  render() {
    let { temp } = this.state.temperature;
    let { temp_max } = this.state.maxTemperature;
    let { temp_min } = this.state.minTemperature;
    let { name } = this.state.cityName;
    // let { quote } = this.state
    console.log(this.state.quotesData)
    console.log(this.state.temperature);
    let quote = this.state.selectedQuotes
    let author =this.state.selectedQuotes
    console.log(this.state.quotesData)
    // for (let i= 0; i<this.state.plannerNotes.length; i++) {
      //   console.log(this.state.plannerNotes[i])
      // };
      let  notes  = this.state.plannerNotes
      console.log(this.state.randomQute)
      return (
        // console.log(this.state.plannerNotes, "here's the state boii"),
      
        
      <div>
        <Navbar/>
        <Container>
          <TopContainer>
            <Time/>
            <Quotes quoteText = {this.state.randomQute.quote} author = {this.state.randomQute.author} getQuote = {this.getQuote} />
             <Weather temperature={temp} maxTemperature={temp_max} minTemperature={temp_min} cityName={name}/> 
          </TopContainer>
          {/* <FullCalender/> */}
          <DatePicker/>
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