export default function GuessResult(props) {
  return (
    <div className="result-panel">
      <div className="result">
        <img
          src={props.resultImg}
          alt="result-img"
          className="result-img"
          style={{ visibility: props.displayImg }}
        />
        <div className="result-text" style={{ color: props.resultColor }}>
          {props.result}
        </div>
      </div>
      <div className="attempts">
        You have <span className="attempt-num">{props.attempts}</span> attempts
        remaining
      </div>
      <div className="hints">
        <strong className="hint-title">Hint: </strong>
        <div style={{ visibility: props.displayFirstHint }}>
          Your last guess is <u>{props.firstHint}</u> than the target.
        </div>
        <div style={{ visibility: props.displaySecondHint }}>
          The target is an <i>{props.secondHint}</i> number.
        </div>
        <div style={{ visibility: props.displayThirdHint }}>
          The target is <strong>{props.thirdHint}a prime number</strong>.
        </div>
      </div>
      <div className="guess-history">Your guesses: {props.pastGuesses}</div>
      <div>
        <button
          style={{ display: props.displayReset }}
          onClick={props.reset}
          className="reset-btn"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
