import http from "../utils/util";

const UserDataService = {
  getAll() {
    return http.get("/user");
  },

  get(email: string) {
    return http.get(`/user/${email}`);
  }

}

export default UserDataService;