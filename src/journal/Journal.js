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
                            <p class="text-left" id="journal-body">lately i've been feeling boxed in by the current limitations of my abilities. 
                            My desire for creative expression has also almost felt like it's outlived the plane of just words and rapping - 
                            I want to express myself on an even more abstract plane, whatever that entails. The same way things sound sicker 
                            when coated in metaphor. I'm obsessed with achievement. And shallow expression, where I'm only saying
                            but not making amorphous and multi-dimensional the message, 
                            feels like second place to me. 
                            I’m not where I want to be as a producer or a vocalist, or even a thinker, 
                            which is ok because I know I can get there with enough practice and tenacity. 
                            But when my tools of expression are limited, the end product is a vision that was not what I had intended. 
                            And I dont think any creative process is ever a planned course from start to finish, 
                            but it leads to a lot of confidence issues and self-doubt over whether I can do something and without the 
                            feeling of control, it becomes even easier to overthink. </p>
                            <p class="text-left" id="journal-body">
                            there’s also the concern of the public. I can create and just let things live in a private domain, but for whatever reason external or internal, I desire for my creations to be consumed. So with that comes an even larger pressure of creating for the public - I know if I released a song tomorrow, only 20 people might listen to it. There’s liberation in having a limited audience, but also a redundant feedback chamber when you feel like you’re only creating for yourself and a select few, and a hopelessness when you want your work to reach as far as possible but know that won’t happen as things currently stand. 
                            </p>
                            <p class="text-left" id="journal-body">It doesn’t feel like my work is being colored right now - 
                            I’m still creating the best work I ever have in my opinion but the tints on my windshield don’t feel right. 
                            i also do not know how to creatively structure a beat yet</p>
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