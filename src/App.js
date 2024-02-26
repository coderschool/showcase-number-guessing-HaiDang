import GameUI from "./components/GameUI";

const data = {
  easy: {
    numRange: "1-10",
    attempts: 4,
    generateTargetNum: () => Math.floor(10 * Math.random() + 1),
  },
  normal: {
    numRange: "1-50",
    attempts: 6,
    generateTargetNum: () => Math.floor(50 * Math.random() + 1),
  },
  hard: {
    numRange: "1-100",
    attempts: 8,
    generateTargetNum: () => Math.floor(100 * Math.random() + 1),
  },
};

const prime = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

export default function App() {
  return (
    <div className="App">
      <GameUI data={data} prime={prime} />
    </div>
  );
}
