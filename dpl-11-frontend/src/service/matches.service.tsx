import http from "../utils/util";

const MatchesDataService = {
  getAll() {
    return http.get('/match');
  },

  get(id: number) {
    return http.get(`/match/${id}`);
  },

  create(data: any) {
    return http.post("/match/add-match", data);
  },

  update(id: number, data: any) {
    return http.put(`/match/${id}`, data);
  },

  delete(id: number) {
    return http.delete(`/match/${id}`);
  }
}

export default MatchesDataService;