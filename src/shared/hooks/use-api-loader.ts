import { unwrapResult } from '@reduxjs/toolkit';
import { useLoading } from '../context/loader-context';
import { useAppDispatch } from '../../store/hook';

const useApiLoader = () => {
  const dispatch = useAppDispatch();
  const { setLoader } = useLoading();

  const executeApiWithLoader = async (cb: any, payload: any) => {
    let result = null;

    setLoader(true);
    result = unwrapResult(await dispatch(cb(payload)));
    setLoader(false);

    return result;
  };

  return { executeApiWithLoader };
};

export default useApiLoader;
