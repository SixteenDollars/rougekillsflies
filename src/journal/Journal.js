import React, { Component } from 'react'
import './Journal.css';
import 'bootstrap/dist/css/bootstrap.css';
import circle from '../resources/images/circle.png'

class Journal extends Component {

    render() {
        return (
            <div id="page">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <p class="text-left" id="journal-head">house play</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p class="text-left" id="journal-date-month">April 25 / <p id="journal-date-year">2020</p></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p class="text-left" id="location">FROM GOD'S EYE VIEW, SOMEWHERE IN AMERICA, 00010</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p class="text-left" id="journal-body">i create with</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <img id="circle" src={circle} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Journal;