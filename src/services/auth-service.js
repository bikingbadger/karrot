import { refreshTokenURL, loginURL } from '../utils/endpoints.js';
import { noAuthHeader } from '../utils/auth-header.js';

class AuthService {
  async login(user) {
    console.log('login', loginURL(), user);

    const payload = user;

    const result = await fetch(loginURL(), {
      method: 'POST',
      headers: noAuthHeader(),
      body: JSON.stringify(payload),
    });
    const data = await result.json();

    return data;
  }

  async refreshToken(refreshToken) {
    console.log('login', refreshTokenURL(), refreshToken);

    const payload = {
      refreshToken: refreshToken,
    };

    const result = await fetch(refreshTokenURL(), {
      method: 'POST',
      headers: noAuthHeader(),
      body: JSON.stringify(payload),
    });
    const data = await result.json();

    return data;
  }

  // register(user) {
  //   return axios.post(API_URL + 'signup', {
  // 	username: user.username,
  // 	email: user.email,
  // 	password: user.password
  //   });
  // }
}
export default new AuthService();
