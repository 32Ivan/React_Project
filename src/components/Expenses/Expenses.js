import React, { useState } from "react";
import "./Exspenses.css";
import ExpensesFilter from "../NewExspense/ExpensesFilter";
import Card from "../UI/Card.js";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChar";

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filterdExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterdYear;
  });




  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterdExpenses} />
        <ExpensesList items={filterdExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
