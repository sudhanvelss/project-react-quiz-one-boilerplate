import React, {Component} from "react";
import './result.css'

class Result extends Component{
    render(){
        return(
            <div className="result-page">
                <h1>Result</h1>
                <div id="result">
                    <h4>You need more practice !</h4>
                    <h1>Your score is 20%</h1>
                    <div id="resultDescription">
                        <div id="flex">
                            <p>Total number of questions</p>
                            <p>15</p>
                        </div>
                        <div id="flex">
                            <p>Number of attempted questions</p>
                            <p>9</p>
                        </div>
                        <div id="flex">
                            <p>Number of correct answers</p>
                            <p>3</p>
                        </div>
                        <div id="flex">
                            <p>Number of wrong answers</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <button id="buttonAgain">Play again</button>
                <button id="buttonHome">Back to home</button>
            </div>
        )
    }
}
export default Result