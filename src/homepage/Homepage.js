import React, { Component } from 'react'
import './Homepage.css';
import ig from '../resources/images/ig.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import war from '../resources/images/cover.png'
import misc from '../resources/images/misc.png'
import plant from '../resources/images/TR.png'
import shoot from '../resources/images/shoot.jpeg'
import ReactPlayer from 'react-player'
import flower from '../resources/videos/08-08.m4v'

class Homepage extends Component {

    componentDidMount() {
        // const circleType = new CircleType(document.getElementById("circleText")).radius(55);
    }

    render() {
        return (
            <main class="homePage">
                <nav>
                    <h1>HALF OF HEAVEN IS A HOME</h1>
                </nav>
                <ul class="img_list">
                    <li>
                        <figure>
                            <a href="https://www.rougedied.com/misc">
                                <img src={misc} alt="Misc"></img>
                            </a>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <a href="https://www.rougedied.com/gallery">
                                <img src={shoot} alt="Shoot"></img>
                            </a>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <a href="https://www.rougedied.com/war">
                                <img src={war} alt="WAR!"></img>
                            </a>
                        </figure>

                    </li>
                    <li>
                        <figure>
                            <a href="https://www.rougedied.com/flower">
                                <img src={plant} alt="Flower"></img>
                            </a>
                        </figure>
                    </li>
                </ul>
                <a href="https://www.instagram.com/rougedied">
                    <img id="ig" class="mx-auto d-block" src={ig} alt=""></img>
                </a>
            </main>
        );
    }
}

export default Homepage;