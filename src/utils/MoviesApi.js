class BeatfilmApi {
  constructor(options) {
    this._url = options.url;
  }

  getMoviesFromBeatfilmApi() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
}

const MoviesApi = new BeatfilmApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
});

export { MoviesApi };
