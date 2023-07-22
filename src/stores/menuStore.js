import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      isOpened: false
    }
  },
  actions: {
    closeMenu() {
      this.isOpened = false;
    },
    openMenu() {
      this.isOpened = true;
    }
  }
})
