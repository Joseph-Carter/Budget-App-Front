import { useState, useEffect } from "react";
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
        <div className="transactions">
            
        </div>
    );
}

export default Transactions;
