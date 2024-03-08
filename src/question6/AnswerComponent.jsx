import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setAnswer } from "./questionSlice";

export default function AnswerComponent() {
  const question = useSelector((state) => state.question.question);
  const answer = useSelector((state) => state.question.answer);
  const [inputAnswer, setInputAnswer] = useState("");
  const dispatch = useDispatch();

  function handleAnswer() {
    dispatch(setAnswer(inputAnswer));
  }

  return (
    <div>
      <p>Fråga: {question}</p>
      <input type="text" onChange={(e) => setInputAnswer(e.target.value)} />
      <button onClick={handleAnswer}>Svara</button>
      <p>Svar: {answer}</p>
      <hr />
    </div>
  );
}
