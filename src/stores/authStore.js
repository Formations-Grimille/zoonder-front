import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: undefined,
      requireLoginOverlay: false,
    }
  },
  actions: {
    defineUserSession(user) {
      this.user = user;
    },
    killUserSession() {
      this.user = undefined;
    }
  },
  getters: {
    getAuthenticatedUser(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.user !== null & state.user !== undefined;
    },
    isRequireLoginOverlayOpened(state) {
      return state.requireLoginOverlay;
    },
  }
})
