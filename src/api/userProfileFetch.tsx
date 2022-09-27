import axios from "axios";

export const userProfileFetch = () => {
  return axios
    .get("http://localhost:5000/scrape")
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
