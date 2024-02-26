export default function Rules(props) {
  return (
    <div className="rules">
      <div className="rule-title">Rules</div>
      <div className="rule-content">
        It's extremely simple. You pick a difficulty, we give you a random
        number in the respective range. And you need to guess it right. Don't
        worry, we will give you hints along the way but you might not even use
        all of them. Because THE GAME IS VERY EASY (if you know how to play).
      </div>
      <div style={{ display: props.displayRange }} className="number-range">
        Range: {props.numRange}
      </div>
    </div>
  );
}
