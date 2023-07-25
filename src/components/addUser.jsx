import React from "react";
import React, { useState } from "react";

function addUser({ onUserSubmit }) {
  const [marka, setMarka] = useState("");
  const [tip, setTip] = useState("");
  const [godište, setGodište] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (marka && tip && godište) {
      onUserSubmit({ marka, tip, godište });
      setMarka("");
      setTip("");
      setGodište("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Marka</label>
        <input
          type="text"
          value={marka}
          onChange={(e) => setMarka(e.target.value)}
        />
      </p>
      <p>
        <label>Tip</label>
        <input
          type="text"
          value={setTip}
          onChange={(e) => setTip(e.target.value)}
        />
      </p>
      <p>
        <label>Godište</label>
        <input
          type="text"
          value={setGodište}
          onChange={(e) => setGodište(e.target.value)}
        />
      </p>
      <button type="submit">Dodaj</button>
    </form>
  );
}

export default addUser;
