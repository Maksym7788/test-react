import { useEffect, useState } from "react";
import "./App.css";

import Description from "./Hw2Components/Description/Description";
import Feedback from "./Hw2Components/Feedback/Feedback";
import Option from "./Hw2Components/Option/Option";
import Notificayion from "./Hw2Components/Notificayion/Notificayion";

const AppHW2 = () => {
  const [feedbackCount, setFeedbackCount] = useState(() => {
    const saved = localStorage.getItem("feedbackCount");
    return saved
      ? JSON.parse(saved)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("feedbackCount", JSON.stringify(feedbackCount));
  }, [feedbackCount]);

  const feedbackCountAdd = (feedbackName) => {
    setFeedbackCount((feedbackType) => ({
      ...feedbackType,
      [feedbackName]: feedbackType[feedbackName] + 1,
    }));
  };
  const { good, neutral, bad } = feedbackCount;

  const feedbackTotal = good + neutral + bad;

  const positive = Math.round(((good + neutral) / feedbackTotal) * 100);

  const feedbackReset = () => setFeedbackCount({ good: 0, neutral: 0, bad: 0 });

  const message = (
    <p>
      <b>No feedback yet</b>
    </p>
  );

  return (
    <div>
      <Description />
      <Option
        feedbackCountAdd={feedbackCountAdd}
        feedbackTotal={feedbackTotal}
        feedbackReset={feedbackReset}
      />
      {feedbackTotal > 0 ? (
        <Feedback
          feedbackCount={feedbackCount}
          feedbackTotal={feedbackTotal}
          positive={positive}
        />
      ) : (
        <Notificayion message={message} />
      )}
    </div>
  );
};

export default AppHW2;
