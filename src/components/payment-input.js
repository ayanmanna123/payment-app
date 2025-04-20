import React, { useState, useEffect } from 'react';

export default function PaymentInputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    amount: '',
    recipientName: '',
    upiId: '',
    currentDateTime: '',
    transactionId: ''
  });

  // Generate a random transaction ID
  useEffect(() => {
    const generateTransactionId = () => {
      return Math.floor(100000000000 + Math.random() * 900000000000).toString();
    };
    
    setFormData(prevData => ({
      ...prevData,
      transactionId: generateTransactionId()
    }));
  }, []);

  // Update the current date and time every second
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).toLowerCase();
      
      setFormData(prevData => ({
        ...prevData,
        currentDateTime: `${formattedDate}, ${formattedTime}`
      }));
    };
    
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const styles = {
    container: {
      maxWidth: '500px',
      margin: '2rem auto',
      padding: '1.5rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    },
    title: {
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#212529'
    },
    formGroup: {
      marginBottom: '1rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '500',
      color: '#495057'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #ced4da',
      fontSize: '1rem'
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#0d6efd',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      marginTop: '1rem'
    },
    readOnlyField: {
      backgroundColor: '#e9ecef',
      cursor: 'not-allowed'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Payment Details</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="amount">Amount (₹)</label>
          <input
            style={styles.input}
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            required
          />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="recipientName">Recipient Name</label>
          <input
            style={styles.input}
            type="text"
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            placeholder="Enter recipient name"
            required
          />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="upiId">UPI ID</label>
          <input
            style={styles.input}
            type="text"
            id="upiId"
            name="upiId"
            value={formData.upiId}
            onChange={handleChange}
            placeholder="username@bankid"
            required
          />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="currentDateTime">Date & Time</label>
          <input
            style={{...styles.input, ...styles.readOnlyField}}
            type="text"
            id="currentDateTime"
            name="currentDateTime"
            value={formData.currentDateTime}
            readOnly
          />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="transactionId">Transaction ID</label>
          <input
            style={{...styles.input, ...styles.readOnlyField}}
            type="text"
            id="transactionId"
            name="transactionId"
            value={formData.transactionId}
            readOnly
          />
        </div>
        
        <button style={styles.button} type="submit">
          Make Payment
        </button>
      </form>
    </div>
  );
}