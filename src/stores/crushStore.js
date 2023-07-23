import { defineStore } from 'pinia'

export const useCrushStore = defineStore('crushs', {
  state: () => {
    return {
      matchedOverlay: false,
      lastMatchedProfile: undefined,
      crushsCount: 0,
      matchs: []
    }
  },
  actions: {
    closeOverlay() {
      this.matchedOverlay = false;
    },
    triggerMatch(profile) {
      this.lastMatchedProfile = profile;
      this.matchedOverlay = true;
      this.crushsCount++;
      this.matchs.push(profile);
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
    },
    getMatches(state) {
      return state.matchs;
    }
  }
})
