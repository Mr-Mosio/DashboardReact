import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

class ValidationError extends Error {
  constructor(errors) {
    super("ValidationError");
    this.errors = errors;
    this.validation = true;
  }
}

class ApiError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

const fetchData = (url, method = "GET", config) => {

    return axios({
      url: API_URL + url,
      method,
      ...config,
      headers: {
        ...config?.headers
      }
    }).then(res => {
      if (!res.data.status) {
        if (typeof res.data.message === "string") {
          throw new ApiError(res.data.message)
        }else {
          throw new ValidationError(res.data.message)
        }
      }
      return res.data
    })

}
export default fetchData;