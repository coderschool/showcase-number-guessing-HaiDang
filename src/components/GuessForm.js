export default function GuessForm(props) {
  return (
    <form action="" onSubmit={props.handleSubmit} className="guess-form">
      <fieldset disabled={props.disabled} className="input-field">
        <select
          name=""
          id=""
          className="difficulty"
          onChange={props.handleSelect}
        >
          <option disabled={props.disableFirstOption}>Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="normal">Normal</option>
          <option value="hard">Hard</option>
        </select>
        <input
          disabled={props.disableInput}
          type="number"
          value={props.guessNum}
          onChange={props.handleChange}
          className="input-bar"
          placeholder="Type your number here"
        />
        <button type="submit" className="guess-btn">
          GUESS
        </button>
      </fieldset>
    </form>
  );
}
