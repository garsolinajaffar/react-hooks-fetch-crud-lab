import React, { useState } from "react";

function NewQuestionForm({ onSubmit }) {
  const [prompt, setPrompt] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctIndex, setCorrectIndex] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ prompt, answers, correctIndex });
    setPrompt("");
    setAnswers(["", "", "", ""]);
    setCorrectIndex(0);
  };

  const handleAnswerChange = (event, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="prompt">Prompt:</label>
        <input
          id="prompt"
          type="text"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="answer0">Answer 1:</label>
        <input
          id="answer0"
          type="text"
          value={answers[0]}
          onChange={(event) => handleAnswerChange(event, 0)}
        />
      </div>
      <div>
        <label htmlFor="answer1">Answer 2:</label>
        <input
          id="answer1"
          type="text"
          value={answers[1]}
          onChange={(event) => handleAnswerChange(event, 1)}
        />
      </div>
      <div>
        <label htmlFor="answer2">Answer 3:</label>
        <input
          id="answer2"
          type="text"
          value={answers[2]}
          onChange={(event) => handleAnswerChange(event, 2)}
        />
      </div>
      <div>
        <label htmlFor="answer3">Answer 4:</label>
        <input
          id="answer3"
          type="text"
          value={answers[3]}
          onChange={(event) => handleAnswerChange(event, 3)}
        />
      </div>
      <div>
        <label htmlFor="correctIndex">Correct Answer:</label>
        <select
          id="correctIndex"
          value={correctIndex}
          onChange={(event) => setCorrectIndex(parseInt(event.target.value))}
        >
          <option value={0}>Answer 1</option>
          <option value={1}>Answer 2</option>
          <option value={2}>Answer 3</option>
          <option value={3}>Answer 4</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewQuestionForm;
