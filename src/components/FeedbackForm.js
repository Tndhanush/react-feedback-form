import React, { useState } from "react";

function FeedbackForm({ addFeedback }) {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || feedback.trim() === "") {
      alert("All fields are required");
      return;
    }

    addFeedback({ name, feedback, date: new Date().toLocaleString() });
    setName("");
    setFeedback("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Enter your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;