<template>
  <button type="button"><slot/></button>
</template>

<style lang="scss" scoped>
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-weight: 700;
  background: $primary_gradient;
  padding: 0.75em 2em;
  color: $light_color;
  border: none;
  border-radius: 2em;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;

  &:active {
    transform: translate3d(0, 1px, 0);
  }
}
</style>