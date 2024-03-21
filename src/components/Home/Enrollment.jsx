import { useState } from 'react';
import DepositForm from './DepositForm';
import InterestCalculator from './InterestCalculator/InterestCalculator';

const Enrollment = () => {
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [depositAmount, setDepositAmount] = useState(false);
  const [depositFrequency, setDepositFrequency] = useState(false);

  if (showDepositForm) {
    return <DepositForm amount={depositAmount} frequency={depositFrequency} />;
  }

  const handleApproveDeposit = (amount, frequency) => {
    setDepositAmount(amount);
    setDepositFrequency(frequency);
    setShowDepositForm(true);
  };

  return <InterestCalculator onSubmit={handleApproveDeposit} />;
};

export default Enrollment;
