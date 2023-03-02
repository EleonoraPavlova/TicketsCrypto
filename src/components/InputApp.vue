<template>
  <div class="d-flex flex-column">
    <slot />
    <input
      :type="type"
      class="m-2 p-2"
      :class="class"
      :placeholder="placeholder"
      :id="id"
      :name="name"
      :disabled="disabled"
      :value="modelValue"
      @input="updateInput"
    />
  </div>
</template>

<script>
export default {
  name: "InputApp",
  props: {
    modelValue: {
      type: [String, Number],
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    class: {
      type: String,
    },
    name: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
