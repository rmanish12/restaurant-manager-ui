import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

const useAllotTableHook = () => {
  const [tableNumber, setTableNumber] = useState<string>('');
  const [totalPerson, setTotalPerson] = useState<string>('1');
  const [customerName, setCustomerName] = useState<string>('');

  const tableNumberChangeHandler = (e: SelectChangeEvent) => {
    setTableNumber(e.target.value);
  };

  const totalPersonChangeHandler = (e: SelectChangeEvent) => {
    setTotalPerson(e.target.value);
  };

  const customerNameChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCustomerName(e.target.value);
  };

  const submitHandler = () => {
    console.log(tableNumber, totalPerson, customerName);
  };

  return {
    tableNumber,
    totalPerson,
    customerName,
    tableNumberChangeHandler,
    totalPersonChangeHandler,
    customerNameChangeHandler,
    submitHandler,
  };
};

export default useAllotTableHook;
