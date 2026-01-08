import css from "./Option.module.css";

const Option = ({ feedbackCountAdd, feedbackTotal, feedbackReset }) => {
  return (
    <div className={css.container}>
      <button
        className={css.button}
        onClick={() => {
          feedbackCountAdd("good");
        }}
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={() => {
          feedbackCountAdd("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.button}
        onClick={() => {
          feedbackCountAdd("bad");
        }}
      >
        Bad
      </button>
      {feedbackTotal > 0 && (
        <button className={css.button} onClick={feedbackReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Option;
