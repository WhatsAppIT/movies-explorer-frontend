class MyApi {
  constructor(options) {
    this._url = options.url;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  editProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._handleResponse);
  }

  /*   getAppInfo() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  } */

  postMovies(data) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
      }),
    }).then(this._handleResponse);
  }

  getSavedMovies() {
    return fetch(`${this._url}/saved-movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-type": "application/json",
      },
    }).then(this._handleResponse);
  }
  /* 
    like(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'PUT',
  
        headers: this._headers,
      }).then(this._handleResponse);
    }
  
    removeLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'DELETE',
  
        headers: this._headers,
      }).then(this._handleResponse);
    }
  
    changeAvatar(url) {
      return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: url,
        }),
      }).then(this._handleResponse);
    } */

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  /*   changeLikeCardStatus(cardId, isLiked) {
      if (isLiked) {
        return this.like(cardId);
      } else {
        return this.removeLike(cardId);
      }
    } */
}

const MainApi = new MyApi({
  url: "https://api.krivolapov.nomoredomainsmonster.ru",
});

export { MainApi };
