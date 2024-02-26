import WelcomePanel from "./WelcomePanel";
import GuessForm from "./GuessForm";
import GuessResult from "./GuessResult";
import Rules from "./Rules";
import { useState } from "react";

export default function GameUI(props) {
  const data = props.data;
  const [diff, setDiff] = useState(null);
  const [guessNum, setGuessNum] = useState("");
  const [targetNum, setTargetNum] = useState(null);
  const [attempts, setAttempts] = useState(null);
  const [guessHistory, setGuessHistory] = useState([]);
  const pastGuesses = guessHistory.map((guessItem, i) => (
    <strong key={i}>{guessItem}, </strong>
  ));
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");
  const [firstHint, setFirstHint] = useState("");
  const [secondHint, setSecondHint] = useState("");
  const [thirdHint, setThirdHint] = useState("");
  const [numRange, setNumRange] = useState("");
  const [resultColor, setResultColor] = useState("");
  const [resultImg, setResultImg] = useState("");

  function handleSelect(e) {
    setDiff(e.target.value);
    const target = data[e.target.value].generateTargetNum();
    setTargetNum(target);
    setGuessHistory([]);
    setAttempts(data[e.target.value].attempts);
    setStatus("");
    setResult("");
    setGuessNum("");
    setSecondHint(target % 2 ? "odd" : "even");
    setThirdHint(props.prime.includes(target) ? "" : "not ");
    setNumRange(data[e.target.value].numRange);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const attemptsCount = attempts - 1;
    setAttempts(attemptsCount);
    if (guessNum !== targetNum) {
      setGuessHistory([...guessHistory, guessNum]);
      setGuessNum("");
      setResult("Try again. Think harder. Remember you got hints");
      setResultColor("red");
      setStatus("wrong");
      setResultImg(
        "https://png.pngtree.com/png-vector/20190507/ourlarge/pngtree-vector-cancel-icon-png-image_1025725.jpg"
      );
    } else if (attemptsCount === data[diff].attempts - 1) {
      setResult(
        "LUCKY bastard, you won on first try. Your LUCK stat is too high. Go gamble or play another round"
      );
      setStatus("winOnFirstTry");
      setResultColor("pink");
      setResultImg(
        "https://media.istockphoto.com/id/1125716911/vector/party-popper-with-confetti.jpg?s=612x612&w=0&k=20&c=sAyofM-MQ5TL-pLyFseV9Vke_W2zyYX1btP90oGJQZE="
      );
    } else {
      setResult(
        "CONGRATS. You guessed the right number. Now try higher difficulty or replay"
      );
      setStatus("win");
      setResultColor("green");
      setResultImg(
        "https://static.vecteezy.com/system/resources/thumbnails/011/858/556/small/green-check-mark-icon-with-circle-tick-box-check-list-circle-frame-checkbox-symbol-sign-png.png"
      );
    }
    if (attemptsCount === 0 && targetNum !== guessNum) {
      setResult(
        "The game is sooooo easy. And yet you managed to LOSE. You had better go touch some grass and return with a better technique"
      );
      setStatus("lose");
      setResultColor("purple");
      setResultImg(
        "https://png.pngtree.com/png-vector/20190531/ourmid/pngtree-trash-bin-icon-png-image_1252303.jpg"
      );
    }
    if (guessNum < targetNum) {
      setFirstHint("smaller");
    }
    if (guessNum > targetNum) {
      setFirstHint("larger");
    }
    console.log(targetNum);
  }
  function reset() {
    const target = data[diff].generateTargetNum();
    setGuessNum("");
    setAttempts(data[diff].attempts);
    setGuessHistory([]);
    setTargetNum(target);
    setStatus("");
    setResult("");
    setSecondHint(target % 2 ? "odd" : "even");
  }
  return (
    <div className="game-ui-container">
      <div className="game-ui">
        <WelcomePanel />
        <Rules displayRange={diff ? "block" : "none"} numRange={numRange} />
        <GuessForm
          handleSelect={handleSelect}
          handleChange={(e) => setGuessNum(parseInt(e.target.value))}
          handleSubmit={handleSubmit}
          guessNum={guessNum}
          disabled={status === "win" || status === "lose" ? true : false}
          disableFirstOption={diff ? true : false}
          disableInput={diff ? false : true}
        />
        {diff && (
          <GuessResult
            resultColor={resultColor}
            attempts={attempts}
            pastGuesses={pastGuesses}
            result={result}
            resultImg={resultImg}
            displayReset={
              status === "win" || status === "lose" ? "inline" : "none"
            }
            reset={reset}
            firstHint={firstHint}
            secondHint={secondHint}
            thirdHint={thirdHint}
            displayFirstHint={
              attempts <= data[diff].attempts - 1 ? "visible" : "hidden"
            }
            displaySecondHint={
              attempts <= data[diff].attempts - 3 ? "visible" : "hidden"
            }
            displayThirdHint={
              attempts <= data[diff].attempts - 5 ? "visible" : "hidden"
            }
            displayImg={status ? "visible" : "hidden"}
          />
        )}
      </div>
    </div>
  );
}
