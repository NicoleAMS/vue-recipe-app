export default {
  token(state) {
    return state.user.token || null;
  },
  isAuthenticated(state) {
    return !!state.user && !!state.user.token;
  },
  userId(state) {
    if (state.user) {
      return state.user.userId;
    }
  },
  user(state) {
    if (state.user) {
      return state.user;
    }
  }
}