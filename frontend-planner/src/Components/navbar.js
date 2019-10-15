import React, {Component} from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

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


class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <PlannerNavbar>
                <h1>FamPlan</h1>
                {/* <a class="indexLink" href="date_picker.html">About Me</a> */}
                <Link to = "/datepicker" >
                    Clique me!
                    </Link>

            </PlannerNavbar>
        )
    }
}


export default Navbar;