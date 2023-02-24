<template>
  <div class="d-flex justify-content-start">
    <div class="d-flex flex-column">
      <label for="input" class="fw-semibold">Ticket</label>
      <input
        type="text"
        class="border border-success m-2 border-opacity-50 rounded-4 p-3 input"
        placeholder="Example: DOGE"
        id="input"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputApp",
  props: {},
};
</script>

<style scoped lang="scss">
.input {
  // width: 15%;
  &:hover {
    border: 1px solid green !important;
    opacity: 1;
  }
}
</style>
