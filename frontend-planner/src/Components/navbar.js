import React, {Component} from 'react'
import styled from "styled-components";

const PlannerNavbar = styled.div`
    position: relative;
    background: rgba(0, 180, 180, 0.8);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-bottom: grey;
    border-width: 0 0 2px 0;
    border-style: solid;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid transparent;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 30px;
  font-weight: 600;
`
class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <PlannerNavbar>
                <h1>FamPlan</h1>
                <Button>Home</Button>
            </PlannerNavbar>
        )
    }
}


export default Navbar;