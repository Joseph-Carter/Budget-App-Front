import React from 'react';

const Transaction = ({transaction, index}) => {
    return (
        <div className='transaction'>
            <tr>
                <td className='date'>
                    {transaction.date ? (<span>{transaction.date}</span>) : 'purchase is pending'}
                </td>
                <td className='item' style={{ cursor: "alias" }}>
                    <a href={`/transactions/${index}`}>{transaction.itemName}</a>
                </td>
                <td className='amount'>{transaction.spent ? (<span>{`- ${transaction.amount}`}</span>) : (<span>{`+ ${transaction.amount}`}</span>)}</td>
            </tr>
        </div>
    );
}

export default Transaction;
