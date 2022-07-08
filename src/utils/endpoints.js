const apiurl = `${import.meta.env.VITE_APP_API_URL}`;

const loginURL = () => {
  return `${apiurl}/api/user/login`;
};

const refreshTokenURL = () => {
  return `${apiurl}/api/user/refreshToken`;
};

/**
 * Kids Related Endpoints
 */
const createKidsURL = () => {
  return `${apiurl}/api/kid/create`;
};

const kidsOfParentURL = () => {
  return `${apiurl}/api/kid/kidsOfParent`;
};

export { loginURL, refreshTokenURL, createKidsURL, kidsOfParentURL };
