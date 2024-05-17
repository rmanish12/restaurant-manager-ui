import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { ILoginFormValueState } from '../models/pages';

const useLoginHook = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<ILoginFormValueState>({
    username: '',
    password: '',
  });

  const [disabled, setDisabled] = useState<boolean>(false);
  const [hasError, setError] = useState<boolean>(false);

  useEffect(() => {
    const { username, password } = formValues;
    if (isEmpty(username) || isEmpty(password)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    setError(false);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formValues);
    const { username, password } = formValues;
    if (username !== 'admin' && password !== 'admin') {
      setError(true);
    }
    navigate('/allot-table');
  };

  return {
    formValues,
    handleChange,
    disabled,
    handleSubmit,
    hasError,
  };
};

export default useLoginHook;
