import { useSettingStore } from '../stores/settingsStore';

const authHeader = () => {
  const settings = useSettingStore();

  if (settings && settings.accessToken) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + settings.accessToken,
    };
  } else {
    return {};
  }
};

const noAuthHeader = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};

export   { authHeader, noAuthHeader };
