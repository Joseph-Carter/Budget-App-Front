import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./TransactionEditForm.css"
const API = import.meta.env.VITE_BASE_URL;

const TransactionEditForm = () => {
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

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setTransaction({...transaction, category: value, });
  };
  

  const updateTransaction = () => {
    const httpOptions = {
      method: "PUT",
      body: JSON.stringify(transaction),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`${API}/transactions/${index}`, httpOptions)
    .then(() => {
      alert(`${transaction.itemName} has been updated.`);
      navigate(`/transactions/${index}`);
    })
    .catch((error) => console.log(error))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTransaction();
  };


  return (
  <div className="editform">
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
          placeholder="yyyy/mm/dd"
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
        <select
          id="category"
          value={transaction.category}
          onChange={handleCategoryChange}
          required
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Income">Income</option>
          <option value="Transportation">Transportation</option>
          <option value="Accessories">Accessories</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Savings">Savings</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default TransactionEditForm;
