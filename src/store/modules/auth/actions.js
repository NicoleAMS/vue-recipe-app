export default {
  async auth(context, payload) {
    let url;
    payload.mode === "signup"
      ? (url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAeujh9MN-IO801LIl_h8FesykwkJbWX2I")
      : (url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAeujh9MN-IO801LIl_h8FesykwkJbWX2I");

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message);
      throw error;
    }

    const expiresIn = responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('email', responseData.email);
    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    context.commit('setUser', {
      email: responseData.email,
      userId: responseData.localId,
      token: responseData.idToken
    });
  },
  logout(context) {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    context.commit('setUser', null);
  },
  autoLogin(context) {
    const email =  localStorage.getItem('email');
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    if (token && userId) {
      context.commit('setUser', {
        email: email,
        userId: userId,
        token: token
      });
    }
  }
};
