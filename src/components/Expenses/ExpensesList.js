import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map(
        (expense /*, index */) => ( // index is discouraged bc can run into bugs, use id if u have
          <ExpenseItem
            key={expense.id} // always use such a key when mapping out list of items
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      )}
    </ul>
  );
};

export default ExpensesList;
