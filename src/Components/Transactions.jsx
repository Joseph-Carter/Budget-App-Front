import { useState, useEffect } from "react";
import Transaction from "./Transaction";
const API = import.meta.env.VITE_BASE_URL


const Transactions = () => {
    const [transactions, setTransaction] = useState([])

    useEffect(() => {
        fetch(`${API}/transactions`)
        .then((response) => response.json())
        .then(transactions => setTransaction(transactions))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="Transactions">
        <section>
                <h1>Expenses</h1>
          <table>
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => {
                return <Transaction key={index} transaction={transaction} index={index} />;
              })}
            </tbody>
          </table>
        </section>
      </div>
    );
}

export default Transactions;
