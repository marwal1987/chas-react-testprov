import { useDispatch } from "react-redux";
import { useState } from "react";
import { setQuestion } from "./questionSlice";

export default function QuestionComponent() {
  const [questionText, setQuestionText] = useState();
  const dispatch = useDispatch();

  function handleSend() {
    dispatch(setQuestion(questionText));
  }

  return (
    <div>
      <input type="text" onChange={(e) => setQuestionText(e.target.value)} />
      <button onClick={handleSend}>Send Question</button>
    </div>
  );
}
