import axios from "axios";

const API_URL = "http://localhost:8080";

class UserService {
  //   saveUser(user) {
  //     console.log(user);
  //     return axios.post(API_URL + "/saveUser", user);
  //   }

  async saveUser(user) {
    console.log(user);
    try {
      const response = await fetch(API_URL + "/saveUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default new UserService();
