import React from "react";

const Feedback = ({
  feedbackCount: { good, neutral, bad },
  feedbackTotal,
  positive,
}) => {
  //   const { good, neutral, bad } = feedbackCount;

  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {feedbackTotal}</li>
        <li>Positiv: {positive}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
