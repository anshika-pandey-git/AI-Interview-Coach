import { useState } from "react";

function InterviewSelector() {
  const [selected, setSelected] = useState("None");

  return (
    <div>
      <h2>Choose Interview Type</h2>

      <button onClick={() => setSelected("Technical")}>
        Technical
      </button>

      <button onClick={() => setSelected("HR")}>
        HR
      </button>

      <button onClick={() => setSelected("Aptitude")}>
        Aptitude
      </button>

      <h3>Selected: {selected}</h3>
    </div>
  );
}

export default InterviewSelector;