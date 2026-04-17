import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks, deleteFeedback }) {
  return (
    <div>
      {feedbacks.length === 0 ? (
        <p>No feedback yet</p>
      ) : (
        feedbacks.map((item) => (
          <FeedbackItem
            key={item.id}
            item={item}
            deleteFeedback={deleteFeedback}
          />
        ))
      )}
    </div>
  );
}

export default FeedbackList;