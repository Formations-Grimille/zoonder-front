import { defineStore } from 'pinia'

export const useCrushStore = defineStore('crushs', {
  state: () => {
    return {
      matchedOverlay: false,
      lastMatchedProfile: undefined,
      crushsCount: 0,
    }
  },
  actions: {
    closeOverlay() {
      this.matchedOverlay = false;
    },
    triggerMatch(profile) {
      console.log("PROFILE", profile);
      this.lastMatchedProfile = profile;
      this.matchedOverlay = true;
      this.crushsCount++;
    }
  },
  getters: {
    isMatchedOverlayOpened(state) {
      return state.matchedOverlay;
    },
    getCrushsCount(state) {
      return state.crushsCount;
    },
    getLastMatchedProfile(state) {
      return state.lastMatchedProfile;
    },
    getLastMatchedAvatar(state) {
      return state.lastMatchedProfile ? `https://zoonder.grimille.fr/${state.lastMatchedProfile.picture}` : undefined;
    }
  }
})
