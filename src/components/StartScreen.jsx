function StartScreen({ onStart }){
    return(
        <div classname="start-screen">
            <h1>QUIZ CHALLENGE</h1>
            <p>test your knowledge with 5 questions</p>
            <button onClick={onStart}>Start Quiz</button>
        </div>
    )
}

export default StartScreen