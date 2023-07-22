import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      opened: false
    }
  },
  actions: {
    closeMenu() {
      this.opened = false;
    },
    openMenu() {
      this.opened = true;
    }
  },
  getters: {
    isOpened(state) {
      return state.opened;
    }
  }
})
