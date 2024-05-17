import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { isEmpty } from 'lodash';
import { IAllotTableFormState } from '../models/pages';
import useTranslation from '../../../shared/hooks/use-translation';
import useApiLoader from '../../../shared/hooks/use-api-loader';
import { allotTable } from '../store/actions';

const useAllotTableHook = () => {
  const t = useTranslation();
  const { executeApiWithLoader } = useApiLoader();

  const [tableNumber, setTableNumber] = useState<IAllotTableFormState>({
    value: '',
    hasError: false,
    message: '',
  });
  const [totalPerson, setTotalPerson] = useState<string>('1');
  const [customerName, setCustomerName] = useState<IAllotTableFormState>({
    value: '',
    hasError: false,
    message: '',
  });

  const tableNumberChangeHandler = (e: SelectChangeEvent) => {
    setTableNumber({
      value: e.target.value,
      hasError: false,
      message: '',
    });
  };

  const totalPersonChangeHandler = (e: SelectChangeEvent) => {
    setTotalPerson(e.target.value);
  };

  const customerNameChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCustomerName({
      value: e.target.value,
      hasError: false,
      message: '',
    });
  };

  const resetFields = () => {
    setTableNumber({
      value: '',
      hasError: false,
      message: '',
    });

    setCustomerName({
      value: '',
      hasError: false,
      message: '',
    });

    setTotalPerson('1');
  };

  const submitHandler = async () => {
    const newTableNumber = { ...tableNumber };
    const newCustomerName = { ...customerName };

    if (newTableNumber.value === '') {
      newTableNumber.hasError = true;
      newTableNumber.message = t('REQUIRED_FIELD_ERROR');
      setTableNumber(newTableNumber);
    }

    if (isEmpty(newCustomerName.value.trim())) {
      newCustomerName.hasError = true;
      newCustomerName.message = t('REQUIRED_FIELD_ERROR');
      setCustomerName(newCustomerName);
    }

    if (!newTableNumber.hasError && !newCustomerName.hasError) {
      const result = await executeApiWithLoader(allotTable, {
        tableNumber: tableNumber.value,
        totalPerson,
        customerName: customerName.value,
      });

      if (!isEmpty(result)) {
        resetFields();
      }
    }
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
