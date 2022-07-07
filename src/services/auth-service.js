import Endpoint from '../utils/endpoints.js';

class AuthService {
  async login(user) {
    console.log('login', Endpoint.login(), user);
    const result = await fetch(Endpoint.login(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await result.json();
    
    return data;    
  }

  async refreshToken(refreshToken) {
    console.log('login', Endpoint.refreshToken(), user);
    
    const payload = {
      refreshToken:refreshToken
  }
    
    const result = await fetch(Endpoint.refreshToken(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
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
