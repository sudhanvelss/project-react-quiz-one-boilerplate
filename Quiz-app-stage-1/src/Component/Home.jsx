import React, {Component} from "react";
import './Home.css'

class Home extends Component{
    render(){
        return(
            <div className="home-page">
                <h3>Quiz App</h3>
                <button id="playBtn">Play</button>
            </div>
        )
    }
}
export default Home