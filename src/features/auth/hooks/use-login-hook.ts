import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { ILoginFormValueState } from '../models/pages';
import { login } from '../store/actions';
import useApiLoader from '../../../shared/hooks/use-api-loader';

const useLoginHook = () => {
  const { executeApiWithLoader } = useApiLoader();

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
    const { username, password } = formValues;
    if (username !== 'admin' && password !== 'admin') {
      setError(true);
    }
    executeApiWithLoader(login, formValues);
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
