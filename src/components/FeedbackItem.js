import React from "react";

function FeedbackItem({ item, deleteFeedback }) {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>{item.feedback}</p>
      <small>{item.date}</small>
      <button onClick={() => deleteFeedback(item.id)}>Delete</button>
    </div>
  );
}

export default FeedbackItem;