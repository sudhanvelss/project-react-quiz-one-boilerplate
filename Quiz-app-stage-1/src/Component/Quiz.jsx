import React, {Component} from "react";
import './quiz.css'

class Quiz extends Component{
    render(){
        return(
            <div className="quiz-page">
                <h1>Question</h1>
                <p id="questionNumber">1 of 15</p>
                <h4 id="question">Which is the only mammal than can jump ?</h4>
                <div id="Optionbuttons">
                    <button>Dog</button>
                    <button>Elephant</button>
                    <button>Goat</button>
                    <button>Lion</button>
                </div>
                <div id ='navigation'>
                    <button id='prevBtn'>Previous</button>
                    <button id='nextBtn'>Next</button>
                    <button id='quitBtn'>Quit</button>
                </div>
            </div>
        )
    }
}
export default Quiz