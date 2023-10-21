import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const TransactionNewForm = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const [dateError, setDateError] = useState("");
  const [transaction, setTransaction] = useState({
    id: 0,
    itemName: "",
    date: "",
    from: "",
    amount: 0,
    spent: true,
    category: "",
  });

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: [e.target.value] });
  };

  const handleSpent = (e) => {
    const { id, value } = e.target
    const isSpent = value === "true";

    setTransaction({ ...transaction, spent: isSpent });
  };

  const isDateValid = (date) => {
    const datePattern = /^\d{4}\/\d{2}\/\d{2}$/;
    return datePattern.test(date);
  };

  const handleDate = (e) => {
    const { id, value } = e.target;

    if (id === "date" && !isDateValid(value)) {
      setDateError("Invalid date format. Please use yyyy/dd/mm.");
    } else {
      setDateError("");
    }

    setTransaction({ ...transaction, [id]: value });
  };

  const handleNumberChange = (e) => {
    const { id, value} = e.target;
    const isNumber = parseFloat(value);

    if (!isNaN(isNumber)) {
      setTransaction({ ...transaction, [id]: isNumber });
    } else {
      e.target.classList.add("error-input");
    }
  };
  

  const addNewTransaction = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`${API}/transactions`, httpOptions).then((response) => {
      alert(`${transaction.itemName} has been added to you transaction`);
      navigate(`/transactions`);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTransaction();
  };

  return (
    <div className="editForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Name of Item:</label>
        <input
          id="itemName"
          value={transaction.itemName}
          type="text"
          onChange={handleTextChange}
          placeholder="Input name of item"
          required
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleDate}
          placeholder="yyyy-dd-mm"
          required
        />
        {dateError && <div style={{ color: "red" }}>{dateError}</div>}
        <br />
        <label htmlFor="from">Purchased From:</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter name of store"
          required
        />
        <br />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleNumberChange}
          required
          className={transaction.amount === 0 ? "error-input" : ""}
        />
        <br />
        <label htmlFor="spent">Did you spend or deposit it?</label>
        <div>
        <input
          id="spent"
          type="radio"
          value="true"
          checked={transaction.spent === true}
          onChange={handleSpent}
          required 
        />
        <label htmlFor="spent">Spent</label>
        </div>
        <br />
        <div>
        <input
          id="deposit"
          type="radio"
          value="false"
          checked={transaction.spent === "false"}
          onChange={handleSpent}
          required
        />
        <label htmlFor="deposit">Deposit</label>
        </div>
        <br />
        <label htmlFor="category">Category</label>
        <input 
          id="category"
          type="text"
          value={transaction.category}
          onChange={handleTextChange}
          required
          placeholder="Enter category (Ex. Food, Income, Transportation)"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TransactionNewForm;