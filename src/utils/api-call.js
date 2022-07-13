import { authHeader, noAuthHeader } from '../utils/auth-header.js';

const callAPI = async (URL, method, auth, payload) => {
  // Setup params
  const params = {
    method: method,
    headers: auth ? authHeader() : noAuthHeader(),
  };
  // Only add a body if there is a POST or DELETE
  if (method !== 'GET') {
    params.body = JSON.stringify(payload);
  }

  const result = await fetch(URL, params);
  console.log(result.status, result);

  // If 403 need to regenerate token or login again
  if (result.status === 403) {
    const settings = useSettingStore();
    console.log('getKids', 'refresh token');
    settings.refreshToken();
    return;
  }

  // Return data as json
  const data = await result.json();
  console.log(data);
  return data;
};

export { callAPI };
