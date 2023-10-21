import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import "./Transactions.css";
import AccountBalance from "./AccountBalance";
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
      <div className="balance">
      <AccountBalance transactions={transactions} />
      </div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Item Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <Transaction key={transaction.id || index} transaction={transaction} index={index} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Transactions;
