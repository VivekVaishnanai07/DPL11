import http from "../utils/util";

const StacksDataService = {

  get(id: any) {
    return http.get(`/stacks/${id}`);
  }

}

export default StacksDataService;