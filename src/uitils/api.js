import axios from "axios";
var Promise = require('promise');
const token = JSON.parse(localStorage.getItem("token"));
axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: "http://api.bion-advertising.com/public",
  headers: {
    Authorization: `Bearer ${token}`,
    'X-Custom-Header': 'XMLHttpRequest'
  },
});

// Refresh token jika error 401 / tokennya expired & Logout jika token blacklist atau error 500
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Jika response 500 dan juga token tidak bisa di refresh lagi maka akan logout dan masuk ke halaman login
    if (
      error.response.status === 500 &&
      error.response.data.message ===
        "Unauthenticated"
    ) {
      console.log("token di hapus dan logout kehalaman login");
      localStorage.removeItem("token");

      return new Promise( ()=> {
        // history nya belom bisa ngepush ke halaman cuma linknya doang terupdate
        // history.push('/login');

        console.log("redirect ke halaman login");
        return (window.location.href = "/login");
        // reject(error);
      });
    }

    console.log(error.response);

    // refresh token jika error 401 dan mesage token has expired
    if (
      error.response.status === 4001 &&
      error.response.data.message === "Unauthenticated."
    ) {
      console.log("the token must be refreshed");
      return instance
        .get("/api/user/auth/user", null)
        .then((res) => {
          const config = error.config;
          localStorage.removeItem("token");
          localStorage.setItem("token", JSON.stringify(res.data.token));
          config.headers["Authorization"] = `Bearer ${res.data.token}`;

          return new Promise((resolve, reject) => {
            axios
              .request(config)
              .then((response) => {
                resolve(response);
              })
              .catch((error) => {
                reject(error);
              });
          });
        })
        .catch((error) => {
          Promise.reject(error);
        });
    }

    return Promise.reject(error);
  }
);

export default instance;
