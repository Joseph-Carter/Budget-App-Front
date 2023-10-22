import React, { useEffect, useState } from 'react';

const AccountBalance = ({transactions}) => {
    const [accountBalance, setAccountBalance] = useState(0);
    
   const calculateBalance = () => {
    let balance = 0

    transactions.forEach((transaction) => {
        if(transaction.spent) {
            balance -= transaction.amount
        } else {
            balance += transaction.amount
        }
    })

    setAccountBalance(balance)
   }
    
    useEffect(() => {
    calculateBalance();
    }, [transactions])

    let balanceClass = "";
    if(accountBalance > 100) {
      balanceClass = "green";
    } else if (accountBalance >= 0) {
        balanceClass = "yellow";
    } else {
        balanceClass = "red";
    }
    
    return (
        <div className={`account-balance ${balanceClass}`}>
            <h2>Account Balance: {accountBalance}</h2>
        </div>
    );
}

export default AccountBalance;
