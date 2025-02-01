import env from "@/env";

const User = {
  createUser: (createUserReq) => {
    return new Promise((resolve, reject) => {
      fetch(`${env.API_URL_STRIPE}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ createUserReq }),
      })
        .then((response) => response.json())
        .then((json) => {
          resolve(json);
        })
        .catch((error) => {
          console.error("Error fetching payment intent:", error);
          reject(error);
        });
    });
  },
};

export default User;
