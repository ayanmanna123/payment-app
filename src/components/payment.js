import React from 'react';
import { Check } from 'lucide-react';

export default function PaymentConfirmation({
  amount = '212.00',
  recipientName = 'Srijan Seal',
  upiId = 'sealsrijan@okaxis',
  dateTime = '5 April 2025, 7:50 pm',
  transactionId = '509507425846'
}) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '120vh',
      backgroundColor: '#212529',
      color: '#fff',
      padding: '1rem'
    },
    checkCircle: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: '#0d6efd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem'
    },
    amount: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    recipient: {
      fontSize: '1.1rem',
      marginBottom: '0.25rem'
    },
    recipientId: {
      fontSize: '0.7rem',
      color: '#6c757d',
      marginBottom: '2.5rem'
    },
    transactionDetails: {
      fontSize: '0.85rem',
      color: '#6c757d',
      textAlign: 'center',
      marginBottom: '2rem'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem'
    },
    button: {
      padding: '0.6rem 1.2rem',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '0.95rem'
    },
    shareButton: {
      backgroundColor: '#22252a',
      color: 'white',
      border: '1px solid rgb(181, 192, 209)',
    },
    doneButton: {
      backgroundColor: '#0d6efd',
      color: 'white',
      textDecoration: 'none'
    }
  };

  return (
    <div style={styles.container}>
      {/* Success Icon */}
      <div style={styles.checkCircle}>
        <Check color="white" size={40} />
      </div>

      {/* Amount */}
      <div style={styles.amount}>₹{amount}</div>

      {/* Recipient */}
      <div style={styles.recipient}>Paid to {recipientName}</div>
      <div style={styles.recipientId}>{upiId}</div>

      {/* Transaction Details */}
      <div style={styles.transactionDetails}>
        <div style={{ marginBottom: '0.25rem' }}>{dateTime}</div>
        <div>UPI transaction ID: {transactionId}</div>
      </div>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <button style={{ ...styles.button, ...styles.shareButton }}>
          Share Screenshot
        </button>
        <a href="/" style={{ ...styles.button, ...styles.doneButton }}>
          Done
        </a>
      </div>
    </div>
  );
}
