import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
      .then((response) => response.json())
      .then((transaction) => setTransaction(transaction))
      .catch((navigate) => navigate(`/404`));
  }, [index, navigate]);

  const transactionDelete = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/transactions/${index}`, httpOptions)
      .then((response) => {
        alert(`You have just deleted the transaction from your budget`);
        navigate(`/transactions`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <article>
      <div className="transaction details">
        <h3>
          Name: {transaction.itemName} Amount: {transaction.amount}
        </h3>
        <h3>Transaction ID: {transaction.id}</h3>
        <h5>Date: {transaction.date}</h5>
        <h5>Location: {transaction.from}</h5>
        <h5>{transaction.category}</h5>
      </div>
      <div className="navigation">
        <div>
          <Link to={"/transactions"}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={transactionDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
};

export default TransactionDetails;
