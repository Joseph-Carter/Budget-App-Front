import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import "./Transactions.css";
const API = import.meta.env.VITE_BASE_URL;

const Transactions = () => {
  const [transactions, setTransaction] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((response) => response.json())
      .then((transactions) => setTransaction(transactions))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="transactions">
      <section>
        <h1>Expenses</h1>
        <h3 className="budegetinfo">
          {transactions.map((transaction, index) => {
            return (
              <Transaction
                key={index}
                transaction={transaction}
                index={index}
              />
            );
          })}
        </h3>
      </section>
    </div>
  );
};

export default Transactions;
