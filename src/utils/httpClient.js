const API = "https://api.themoviedb.org/3";
const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGU4Yjk5YzYxZTg4Nzg2ZDc3NDgzYjA4OTg3Y2Y4MiIsInN1YiI6IjYwNzcxNDBmMmZhZjRkMDA3OGE5OTljZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BbSsJN8B-OcX4uZb9Hgs4p5SK6B_uAo3r00DbBc7Zl4";
export function get(path) {
    return fetch( API + path, {
      headers: {
        Authorization: "Bearer " + access_token,
        "Content-Type": "application/json;charset=utf-8"
      }
    }).then(result => result.json())
}