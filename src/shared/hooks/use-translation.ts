import { useIntl } from 'react-intl';

const useTranslation = () => {
  const intl = useIntl();

  return (text: string) => intl.formatMessage({ id: text });
};

export default useTranslation;
