import React, { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("feedbacks"));
    if (saved) setFeedbacks(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const addFeedback = (data) => {
    setFeedbacks([{ ...data, id: Date.now() }, ...feedbacks]);
  };

  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Feedback Manager</h1>
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackList feedbacks={feedbacks} deleteFeedback={deleteFeedback} />
    </div>
  );
}

export default App;