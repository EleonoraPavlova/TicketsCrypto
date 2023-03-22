<template>
  <button
    class="btn m-1"
    :class="[`btn-${color}`, `btn-${size}`]"
    @click="($e) => $emit('click', $e)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonsApp",
  props: {
    color: {
      type: String,
      default: "main-color-purple",
    },
    size: {
      type: String,
      default: "lg",
    },
    type: {
      type: String,
      default: "button",
    },
  },
  emits: ["click"],
};
</script>
<style lang="scss">
.main-color-purple {
  color: #7431f9;
}
</style>
