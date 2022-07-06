const apiurl = `${import.meta.env.VITE_APP_API_URL}`;

class Endpoint {
  constructor() {}
  login() {
    return `${apiurl}/api/user/login`;
  }
}

export default new Endpoint();
