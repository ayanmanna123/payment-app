import React, { useState } from 'react';
import PaymentInputForm from './components/payment-input.js';
import PaymentConfirmation from './components/payment.js';

function App() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentData, setPaymentData] = useState(null);

  const handlePaymentSubmit = (data) => {
    setPaymentData(data);
    setShowConfirmation(true);
  };

  const handleBackToForm = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="App">
      {!showConfirmation ? (
        <PaymentInputForm onSubmit={handlePaymentSubmit} />
      ) : (
        <div>
          <PaymentConfirmation 
            amount={paymentData.amount}
            recipientName={paymentData.recipientName}
            upiId={paymentData.upiId}
            dateTime={paymentData.currentDateTime}
            transactionId={paymentData.transactionId}
          />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
          }}>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;