import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const TransactionNewForm = () => {
  const { index } = useParams();
  const navigate = useNavigate();

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

  const handleSpent = () => {
    setTransaction({ ...transaction, spen

  return <div className=""></div>;
};

export default TransactionNewForm;
