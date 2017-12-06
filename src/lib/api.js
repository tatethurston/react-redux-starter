import axios from 'axios';

class API {
  constructor(apiURL) {
    this.apiURL = apiURL;
    this.token = undefined;
  }

  get(url) {
    return this.request({ url, method: 'GET' });
  }

  patch(url, data) {
    return this.request({ url, method: 'PATCH', data });
  }

  post(url, data) {
    return this.request({ url, method: 'POST', data });
  }

  delete(url) {
    return this.request({ url, method: 'DELETE' });
  }

  async request(options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await axios.request(Object.assign({ headers, baseURL: this.apiURL }, options));
    return response.data.data;

  }
}

export default API
