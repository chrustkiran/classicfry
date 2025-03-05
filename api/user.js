import env from "@/env";

const UserService = {
  createUser: (createUserReq) => {
    return new Promise((resolve, reject) => {
      fetch(`${env.API_URL_STRIPE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createUserReq),
      })
        .then((response) => resolve(response.json()))
        .catch((error) => {
          console.error("Error fetching create user:", error);
          reject(error);
        });
    });
  },
};

export default UserService;
