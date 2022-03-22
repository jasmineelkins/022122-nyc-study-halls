import React, { useState } from "react";

// 1. set state for each of the 3 input fields
// could be set as one object for all inputs - try to refactor to that
// 2. set onChange for each of the three inputs
// 3. make it so that when we type something into input, it changes the state using onChange={(e)=>setIncome(e.target.value)}
// make it so input changes state, and state changes input
// 4. handleSubmit
// 5. handleReset resets all states
// 6. add min value to validate income entry

function TaxForm(props) {
  const [income, setIncome] = useState(0);
  const [taxBracket, setTaxBracket] = useState("low");
  const [comment, setComment] = useState("type comment here");

  function handleSubmit(e) {
    e.preventDefault();

    let owed;

    if (taxBracket === "low") {
      owed = 0.5;
    } else if (taxBracket === "middle") {
      owed = 0.2;
    } else if (taxBracket === "high") {
      owed = 0.01;
    }
    alert(`You owe ${income * owed}. Thank you for doing your taxes!`);

    handleReset();
  }

  function handleReset() {
    setIncome(0);
    setTaxBracket("low");
    setComment("type comment here");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label name="income">How much did you make last year?</label>
        <input
          type="number"
          name="income"
          onChange={(e) => setIncome(e.target.value)}
          value={income}
          min={0}
        />

        <p>
          Based on your income, we'd suggest a tax bracket of{" "}
          <span>Service Drone</span>
        </p>

        <label htmlFor="tax-bracket">What is your tax bracket?</label>

        <select
          name="tax-bracket"
          onChange={(e) => setTaxBracket(e.target.value)}
          value={taxBracket}
        >
          <option value="low">Service Drone</option>
          <option value="middle">Middle Class American</option>
          <option value="high">Been to Space</option>
        </select>

        <label htmlFor="comments">
          We value your feedback! Write a comment:{" "}
        </label>
        <textarea
          name="comments"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />

        <input type="submit" value="Submit Taxes" onClick={handleSubmit} />
      </form>

      <button type="button" onClick={handleReset}>
        Reset Form
      </button>
    </>
  );
}

export default TaxForm;
