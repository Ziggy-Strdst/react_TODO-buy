import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectYear, setSelectYear] = useState("2020");
  const addSelectionHandler = (selectedYear) => {
    setSelectYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((el) => {
    return el.date.getFullYear().toString() === selectYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectYear}
        onSelectionHandler={addSelectionHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
