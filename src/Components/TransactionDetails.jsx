import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
const API = import.meta.env.VITE_BASE_URL

const TransactionDetails = () => {
    const [transaction, setTransaction] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/transactions/${index}`)
        .then((response) => response.json())
        .then(transaction => setTransaction(transaction))
        .catch(navigate => navigate(`/404`))
    }, [index, navigate])

    const transactionDelete = () => {
        const httpOptions = { "method" : "DELETE"} 
        fetch(`${API}/transactions/${index}`, httpOptions)
        .then((response) => {
            alert(`You have just deleted the transaction from your budget`)
            navigate(`/transactions`)
        })
        .catch((error) => console.error(error))
    }

    return (
        <div>
            
        </div>
    );
}

export default TransactionDetails;
