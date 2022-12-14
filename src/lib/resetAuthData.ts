import { LS_KEYS } from 'src/constants';

const resetAuthData = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem(LS_KEYS.PUMA_STORE);
  localStorage.removeItem(LS_KEYS.TRANSACTION_STORE);
  localStorage.removeItem(LS_KEYS.TIMELINE_STORE);
  localStorage.removeItem(LS_KEYS.MESSAGE_STORE);
};

export default resetAuthData;
