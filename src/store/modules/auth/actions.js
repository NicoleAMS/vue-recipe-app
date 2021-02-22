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

    context.commit('setUser', {
      email: responseData.email,
      userId: responseData.localId,
      token: responseData.idToken
    });
  },
  logout(context) {
    context.commit('setUser', null);
  }
};
