import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  signup(user) {
    const { name, surname, email, password } = user;
    return this.auth.post('/auth/signup', { name, surname, email, password })
      .then(({ data }) => data);
  }

  login(user) {
    const { email, password } = user;
    return this.auth.post('/auth/login', { email, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout', {})
      .then(response => response.data)
  }

  me() {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  }
}

const authService = new AuthService();
export default authService;
