import React, { useState, useEffect } from "react";
import QuestionList from "./QuestionList";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;

