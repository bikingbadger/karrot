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

    //   return axios
    // 	.post(API_URL + 'signin', {
    // 	  username: user.username,
    // 	  password: user.password
    // 	})
    // 	.then(response => {
    // 	  if (response.data.accessToken) {
    // 		localStorage.setItem('user', JSON.stringify(response.data));
    // 	  }
    // 	  return response.data;
    // 	});
  }

  // logout() {
  //   localStorage.removeItem('user');
  // }

  // register(user) {
  //   return axios.post(API_URL + 'signup', {
  // 	username: user.username,
  // 	email: user.email,
  // 	password: user.password
  //   });
  // }
}
export default new AuthService();
