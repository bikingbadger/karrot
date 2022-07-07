const apiurl = `${import.meta.env.VITE_APP_API_URL}`;

class Endpoint {
  constructor() {}
  
  login() {
    return `${apiurl}/api/user/login`;
  }

  refreshToken() {
    return `${apiurl}/api/user/refreshToken`;
  }
}

export default new Endpoint();
