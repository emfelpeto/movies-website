const API = "https://api.themoviedb.org/3";
const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGE5ZGI0ZDA0NGRjNzc1ZmZkNmFiMWFjYjc4YzQyMSIsInN1YiI6IjYwNzcxNDBmMmZhZjRkMDA3OGE5OTljZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Co9fPSiZBXSndLwPeG3fCaVywTmgc-YyhQ_hQ2hS9ps";
export function get(path) {
    return fetch( API + path, {
      headers: {
        Authorization: "Bearer " + access_token,
        "Content-Type": "application/json;charset=utf-8"
      }
    }).then(result => result.json())
}