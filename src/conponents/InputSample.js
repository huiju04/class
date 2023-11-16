import { useState } from "react";

export const InputSample = () => {
  const [text, setText] = useState("");

  const reset = () => {
    setText("");
  };

  const ChangeValue = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={ChangeValue} value={text} />
      <button onClick={reset}>초기화</button>

      <div>
        <p>값: {text}</p>
      </div>
    </>
  );
};
