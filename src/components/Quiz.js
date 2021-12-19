import React from 'react'
import data from '../data/quizData'
import { useState } from 'react';

function Quiz() {
    const [quiz, setQuiz] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    function currentQuiz(isCorrect) {
        if(isCorrect === true){
            setScore(score + 1);
            console.log(score);
        }
        const nextQuestion = quiz + 1;

        if(quiz + 1 < data.length){
            setQuiz(nextQuestion);
        }
        else{
            setShowScore(true);
        }
    }

    const percentage = (score / data.length) * 100;

    function scoreColors(percentage) {

        if(percentage >= 0 && percentage <= 40){
            return 'red';
        }
        else if(percentage >= 41 && percentage <= 80){
            return 'orange';
        }
        else if(percentage >= 81 && percentage <= 100){
            return 'green';
        }

    }

    function restartQuiz() {
        setQuiz(0);
        setShowScore(false);
        setScore(0);
    }

    return (
        <div>
            {
                showScore ? ( 
                <div>
                    <p className="score" 
                        id={scoreColors(percentage)}>
                        Score: {Math.floor(percentage)}%
                    </p> 
                    <button 
                        onClick={restartQuiz}
                        className="play-again-btn">
                        Try Again</button>
                </div> ) :
                (
                    <div className="quiz-card">
                        <h1>Question: {quiz + 1} / {data.length}</h1>
                        <h4>{data[quiz].question}</h4>
                        {data[quiz].answerOptions.map(btn => 
                        <button className="btn" onClick={() => currentQuiz(btn.isCorrect)}>{btn.answerText}</button>)}
                    </div> 
                )
            }
        </div>
    )
}

export default Quiz;